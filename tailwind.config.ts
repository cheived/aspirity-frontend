import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "bg-primary": "#141414",
      "bg-secondary": "#232324",
      "bg-tertiary": "#202021",
      "bg-modal": "#303030",
      "bg-accent": "#0047BB",
      "bg-success": "#2E7D32",
      "bg-error": "#D32F2F",

      "text-primary": "#E1E3E6",
      "text-secondary": "#B0B1B6",
      "text-tertiary": "#76787A",
      "text-accent": "#0047BB",
      "text-success": "#2E7D32",
      "text-error": "#D32F2F",

      "icons-primary": "#E1E3E6",
      "icons-secondary": "#B0B1B6",
      "icons-tertiary": "#76787A",
      "icons-accent": "#0047BB",
      "icons-success": "#2E7D32",
      "icons-error": "#D32F2F",

      "border-primary": "#363738",
      "border-accent": "#0047BB",
      "border-success": "#2E7D32",
      "border-error": "#D32F2F",

      "state-accent-disabled": "#424242",
      "state-blue-hover": "#003182",
      "state-blue-focused": "#4C7ECF",
      "state-transparent-blue-hover": "#0047BB",
      "state-transparent-blue-focused": "#0047BB",
      "state-error-hover": "#C62828",
      "state-error-focused": "#E06D6D",
      "state-transparent-error-hover": "#D32F2F",
      "state-transparent-error-focused": "#D32F2F",
      "state-success-hover": "#1B5E20",
      "state-success-focused": "#6CA46F",
      "state-transparent-success-hover": "#2E7D32",
      "state-transpatrent-success-focused": "#2E7D32",
      "state-transparent-contrast-hover": "#FFFFFF",
      "state-transparent-contrast-focused": "#FFFFFF",

      "brand-blue": "#0047BB",
      "brand-dark-blue": "#001A72",
      "brand-orange": "#FA4616",
      "brand-white": "#FFFFFF",
      "brand-black": "#101820"


    },
    fontFamily: {
      "poppins": ["Poppins"]
    },
    fontSize: {
      "customheadline": ['48px', {
        lineHeight: '56px',
        fontWeight: '700',
      }],
      "title3": ['16px', {
        lineHeight: '24px',
        fontWeight: '500',
      }],
      "h1": ['96px', {
        lineHeight: '112px',
        fontWeight: '300',
      }],
      "h2": ['60px', {
        lineHeight: '72px',
        fontWeight: '300',
      }],
      "h3": ['48px', {
        lineHeight: '56px',
        fontWeight: '400',
      }],
      "h4": ['34px', {
        lineHeight: '36px',
        fontWeight: '400',
      }],
      "h5": ['24px', {
        lineHeight: '32px',
        fontWeight: '400',
      }],
      "h6": ['20px', {
        lineHeight: '24px',
        fontWeight: '600',
      }],
      "subtitle1": ['16px', {
        lineHeight: '24px',
        fontWeight: '400',
      }],
      "subtitle2": ['14px', {
        lineHeight: '24px',
        fontWeight: '500',
      }],
      "body1": ['16px', {
        lineHeight: '24px',
        fontWeight: '400',
      }],
      "body2": ['14px', {
        lineHeight: '20px',
        fontWeight: '400',
      }],
      "button": ['14px', {
        lineHeight: '20px',
        fontWeight: '600',
      }],
      "caption": ['12px', {
        lineHeight: '16px',
        fontWeight: '400',
      }],
      "overline": ['12px', {
        lineHeight: '32px',
        fontWeight: '400',
      }],


    },
    extend: {

    }
  },
  plugins: [],
};
export default config;
