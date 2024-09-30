import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { NativeClockSettingsViewProps } from './NativeClockSettings.types';

const NativeView: React.ComponentType<NativeClockSettingsViewProps> =
  requireNativeViewManager('NativeClockSettings');

export default function NativeClockSettingsView(props: NativeClockSettingsViewProps) {
  return <NativeView {...props} />;
}
