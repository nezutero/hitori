import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

import coloradix, { mauve, pink } from "@coloradix/tailwindcss";

const radix = coloradix({
    mauve,
    pink,
})
    .alias({
        neutral: "mauve",
        primary: "pink",
    })
    .build();

export default {
    content: ["./src/**/*.{ts,tsx,astro}"],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            ...radix.colors,
        },
        extend: {
            fontFamily: {
                sans: ["Inter"].concat(defaultTheme.fontFamily.sans),
                mono: ["Roboto Mono"].concat(defaultTheme.fontFamily.mono),
            },
        },
    },
    plugins: [radix.plugin],
} satisfies Config;
