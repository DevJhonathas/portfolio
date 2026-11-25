export {};

declare global {
  interface Window {
    clarity?: {
      (command: "event", eventName: string): void;
      (command: "set", key: string, value: string | string[]): void;
    };
  }
}
