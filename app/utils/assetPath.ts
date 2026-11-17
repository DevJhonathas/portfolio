const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export function assetPath(path: string | undefined | null): string {
  if (!path) return "";

  if (/^(https?:)?\/\//i.test(path) || /^(data:|blob:)/i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (
    basePath &&
    (normalizedPath === basePath || normalizedPath.startsWith(`${basePath}/`))
  ) {
    return normalizedPath;
  }

  return `${basePath}${normalizedPath}`;
}
