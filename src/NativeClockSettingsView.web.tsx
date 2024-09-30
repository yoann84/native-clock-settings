import * as React from 'react';

import { NativeClockSettingsViewProps } from './NativeClockSettings.types';

export default function NativeClockSettingsView(props: NativeClockSettingsViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
