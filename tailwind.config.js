module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        paper: '#F4EEE3',
        'paper-raised': '#FBF7EF',
        ink: '#211C17',
        'ink-soft': '#3A332B',
        'ink-mid': '#4A443B',
        muted: '#6B6358',
        faint: '#8A8175',
        fainter: '#9C9286',
        rust: '#B4471F',
        'rust-hover': '#8F3415',
        'rust-dark': '#E0764A',
        'contact-band': '#1A1714',
        success: '#8FCB9B',
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'kr-marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'kr-marquee': 'kr-marquee 44s linear infinite',
      },
    },
  },
  plugins: [],
};
