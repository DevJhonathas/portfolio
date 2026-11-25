export function trackClarityEvent(eventName: string) {
  if (typeof window === "undefined") return;

  window.clarity?.("event", eventName);
}

export function setClarityTag(key: string, value: string | string[]) {
  if (typeof window === "undefined") return;

  window.clarity?.("set", key, value);
}
