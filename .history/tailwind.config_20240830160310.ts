import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#dad8d8",
        "primary-content": "#5c5757",
        "primary-dark": "#c1bebe",
        "primary-light": "#f3f2f2",

        secondary: "#d9dad8",
        "secondary-content": "#595c57",
        "secondary-dark": "#bfc1be",
        "secondary-light": "#f2f3f2",

        background: "#f1efef",
        foreground: "#fbfbfb",
        border: "#e2dddd",

        copy: "#292323",
        "copy-light": "#6e5e5e",
        "copy-lighter": "#958484",

        success: "#d8dad8",
        warning: "#dadad8",
        error: "#dad8d8",

        "success-content": "#575c57",
        "warning-content": "#5c5c57",
        "error-content": "#5c5757",
      },
      boxShadow: {
        neu1: "10px 10px 20px #b3b3b3, -10px -10px 20px #ffffff",
        neu2: "shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]",
      },
      transitionTimingFunction: {
				bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
			},
      keyframes: {
        progressGrow: {
          '50%': { transform: 'translateY(-5%)' },
        },
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
        "slide-in": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "progress-grow": {
          "0%": {
            transform: "scaleX(0.01)",
          },
          "20%": {
            transform: "scaleX(0.1)",
          },
          "30%": {
            transform: "scaleX(0.6)",
          },
          "40%,50%": {
            transform: "scaleX(0.9)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
        "progress-pulse": {
          "0%": {
            "mask-position": "200% center",
          },
          "100%": {
            "mask-position": "0% center",
          },
        },
        'marquee': {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        'background-shine': {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(100%)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-out': {
          from: { opacity: '1', transform: 'translateY(0)' },
          to: { opacity: '0', transform: 'translateY(-100%)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        spin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        pulse: {
          '50%': {
            opacity: '.5',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
        slide: {
          '0%': { transform: 'translateY(150%)', opacity: '0.1' },
          '15%': { transform: 'translateY(0)', opacity: '1' },
          '30%': { transform: 'translateY(0)', opacity: '1' },
          '45%': { transform: 'translateY(-150%)', opacity: '1' },
          '100%': { transform: 'translateY(-150%)', opacity: '0.1' },
        },
      },
      animation: {
        'progress': "progress-grow var(--progress-duration) 1 both normal, progress-pulse 1s ease var(--progress-duration) infinite normal none running",
        'background-shine': 'background-shine 2s linear infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        float: 'float 4s ease-in-out infinite',
        slide: 'slide 4s linear infinite',

        shimmer: "shimmer 8s infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "fade-in": "fade-in 1s ease-in-out forwards",
        "slide-in": "slide-in 1s ease-in-out forwards",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "progress-indeterminate":
          "progress-grow var(--progress-duration) 1 both normal, progress-pulse 1s ease var(--progress-duration) infinite normal none running",
      },

    },
  },
  variants: {
    extend: {
      opacity: ["group-hover"],
      transitionOpacity: ["group-hover"],
    },
  },
  plugins: [require("tailwindcss-animate"), ("tailwind-scrollbar")],
} satisfies Config;
