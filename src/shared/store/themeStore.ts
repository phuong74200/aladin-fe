import {
    ColorScheme,
    DefaultMantineColor,
    MantineThemeOverride,
} from "@mantine/core";
import { create } from "zustand";

interface ThemeState {
    setPrimaryColor: (color: DefaultMantineColor) => void;
    setColorScheme: (scheme: ColorScheme) => void;
    toggleColorScheme: (scheme?: ColorScheme) => void;
    theme: MantineThemeOverride;
}

export const useThemeStore = create<ThemeState>((set) => ({
    theme: {
        primaryColor: "blue",
        colorScheme: "dark",
    },
    setPrimaryColor: (color: DefaultMantineColor) => {
        set((state) => ({
            theme: {
                ...state.theme,
                primaryColor: color,
            },
        }));
    },
    setColorScheme: (scheme: ColorScheme) => {
        set((theme) => ({
            theme: {
                ...theme,
                colorScheme: scheme,
            },
        }));
    },
    toggleColorScheme: (scheme?: ColorScheme) => {
        set((state) => ({
            theme: {
                ...state.theme,
                colorScheme:
                    scheme ||
                    (state.theme.colorScheme === "dark" ? "light" : "dark"),
            },
        }));
    },
}));
