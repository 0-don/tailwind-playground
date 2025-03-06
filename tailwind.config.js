module.exports = {
  content: [
    './src/**/*.html',
    './**.html'
  ],
  darkMode: 'media',
  theme: {
    gridTemplateAreas: {
      'layout': [
        'left middle middle middle right',
      ],
    },
    extend: {
      fontFamily: {
        rajdhani: "'Rajdhani', sans-serif",
        vt323: "'VT323', monospace"
      },
      colors: {
        '300': '#1e181e',
        '500': '#191a1e',
        'primary-200': '#f4908b',
        'primary-300': '#ea6f69',
        'primary-500': '#e8615a',
        'primary-600': '#9c3230',
        'primary-700': '#5e2122',
        'primary-800': '#451717',
        'primary-900': '#3c181a',
        'secondary-500': '#2be4ea',
        'secondary-900': '#295459',
        'tertiary-500': '#fed33f',
        'active-500': '#2bfea0',
      },
      backgroundImage: {
        'elips': "radial-gradient(ellipse at 33% 10%, #461616 0%, transparent 75%)"
      }
    },
  },
  plugins: [
      require('@savvywombat/tailwindcss-grid-areas'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],

}
