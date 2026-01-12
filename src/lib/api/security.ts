import { environment } from "../environment";

export const ALLOWED_DOMAINS = [
  environment.APIS.GITHUB_API,
  environment.APIS.LASTFM_API,
];

export function isUrlAllowed(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    return ALLOWED_DOMAINS.some(
      (domain) => new URL(domain).origin === parsedUrl.origin
    );
  } catch {
    return false;
  }
}
