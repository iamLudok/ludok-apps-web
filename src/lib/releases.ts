// La última release de cada app, leída de la API de GitHub al compilar la web. Así la versión, el
// tamaño y el enlace directo al APK no se tocan a mano en cada versión: basta con volver a
// compilar (la Action lo hace sola cada día).
//
// Si GitHub no responde (sin red, límite de peticiones, repo sin release), devuelve null y la web
// enlaza a la página de releases sin versión ni tamaño: nunca rompe la compilación.

export interface Release {
  version: string;
  date: Date;
  apkUrl: string;
  sizeMB: number;
}

interface GithubRelease {
  tag_name: string;
  published_at: string;
  assets: { name: string; size: number; browser_download_url: string }[];
}

// Varias páginas piden la misma release (la app en los dos idiomas): una sola petición por repo.
const cache = new Map<string, Promise<Release | null>>();

export function latestRelease(repo: string): Promise<Release | null> {
  let pending = cache.get(repo);
  if (!pending) {
    pending = fetchLatest(repo);
    cache.set(repo, pending);
  }
  return pending;
}

async function fetchLatest(repo: string): Promise<Release | null> {
  // Sin token, la API deja 60 peticiones por hora y por IP; en la Action va el GITHUB_TOKEN.
  const token: string | undefined = import.meta.env.GITHUB_TOKEN;
  const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
      headers,
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const release = (await response.json()) as GithubRelease;
    const apk = release.assets.find((asset) => asset.name.endsWith('.apk'));
    if (!apk) throw new Error('la release no lleva ningún APK');

    return {
      version: release.tag_name,
      date: new Date(release.published_at),
      apkUrl: apk.browser_download_url,
      sizeMB: Math.round(apk.size / 1e6),
    };
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.warn(`[releases] ${repo}: ${reason}. Se enlaza a su página de releases.`);
    return null;
  }
}
