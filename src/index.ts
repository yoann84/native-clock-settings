import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to NativeClockSettings.web.ts
// and on native platforms to NativeClockSettings.ts
import NativeClockSettingsModule from './NativeClockSettingsModule';
import NativeClockSettingsView from './NativeClockSettingsView';
import { ChangeEventPayload, NativeClockSettingsViewProps } from './NativeClockSettings.types';

// Get the native constant value.
export const PI = NativeClockSettingsModule.PI;

export function hello(): string {
  return NativeClockSettingsModule.hello();
}

export async function setValueAsync(value: string) {
  return await NativeClockSettingsModule.setValueAsync(value);
}

const emitter = new EventEmitter(NativeClockSettingsModule ?? NativeModulesProxy.NativeClockSettings);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { NativeClockSettingsView, NativeClockSettingsViewProps, ChangeEventPayload };
