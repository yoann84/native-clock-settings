package com.yourpackage.elapsedtime

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class NativeClockSettingsModule : Module() {
    override fun definition() = ModuleDefinition {
        Name("NativeClockSettings")

        Function("getElapsedTimeMillis") {
            android.os.SystemClock.elapsedRealtime()
        }
    }
}