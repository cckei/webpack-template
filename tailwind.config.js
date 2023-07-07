module.exports = {
  content: [
    "./src/**/*.{html,pug,scss,css}",
    "./dist/**/*.{html,scss,css}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
        },
        screens: {
          sm: '100%',
          md: '728px',
          lg: '980px',
          xl: '1024px',
          xxl: '1280px',
        },
      },
      screens: {
        "xs": "320px",
        "sm": "480px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "xxl": "1536px",
        'mobile': {max: '767px'},
        'tablet': {min: '768px', max: '1023px'},
        'laptop': {min: '1024px', max: '1279px'},
        'desktop': {min: '1024px'},
        'desktopLg': {min: '1536px'},
        'desktopMd': {min: '1280px', max: "1535px"},
      },
      spacing: {
        "0": '0px',
        xs: '8px',
        sm: '16px',
        md: '32px',
        lg: '64px',
        xl: '128px',
        gutter: '20px',
      },
      fontSize: {
        h1: '2rem',
        h2: '1.5rem',
        h3: '1.1rem',
        h4: '1rem',
        h5: '0.8rem',
        h6: '0.6rem',
        xs: '0.6rem',
        sm: '0.8rem',
        base: '1rem',
        lg: '1.1rem',
        xl: '1.5rem',
        xxl: '2rem',
        title: '2.5rem',
        subtitle: '2.25rem',
        display: '5rem',
      },
    },
  },
  plugins: [],
}