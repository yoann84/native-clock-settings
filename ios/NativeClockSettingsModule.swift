import ExpoModulesCore

public class NativeClockSettingsModule: Module {
    public func definition() -> ModuleDefinition {
        Name("NativeClockSettings")

        Function("getElapsedTimeMillis") { () -> Double in
            let nanoseconds = clock_gettime_nsec_np(CLOCK_MONOTONIC_RAW)
            return Double(nanoseconds) / 1_000_000.0
        }
    }
}