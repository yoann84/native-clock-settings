import NativeClockSettingsModule from "./NativeClockSettingsModule";

export function getElapsedTimeMillis(): string {
  return NativeClockSettingsModule.getElapsedTimeMillis();
}
