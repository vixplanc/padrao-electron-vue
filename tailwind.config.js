
/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';


export default {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './index.html',
  ],

  theme: {
    extend: {
      fontFamily: {
        'padrao-sans' : ["Open Sans", 'Segoe UI'],
        'padrao-normal' : 'Segoe UI',
        'padrao-light' : 'Segoe UI Light',
        'padrao-destaque' : 'Trebuchet MS',
        'padrão-sans' : 'Open Sans',
      },
      colors: {
          'vixpar' : {
              primary: '#1f2b5e',
              secondary: '#cdd72a',
              warm: {
                  100: '#f15a22',
                  200: '#ffb94a',
                  300: '#ff514d',
              },
              cool: {
                  100: '#000027',
                  200: '#63d8e5',
                  300: '#ab76ff',
                  400: '#1F6D91',
                  500: '#3DB18F'
              },
              mono: {
                  100: '#F0F4FC',
                  200: '#a09ca2',
                  300: '#b59e86',
                  400: '#2f323b'
              }
          }
      }
    },
  },
  plugins: [
    plugin(function({addComponents}) {

      const buttons = require('./style/buttons.js')

      addComponents({
          ':root': {
              '--primary' : '#1f2b5e',
              '--secondary' : '#cdd72a',
              '--mono-100' : '#F0F4FC',
              '--mono-200' : '#a09ca2'
          },

          '.degrade-100' : {
                  background: 'linear-gradient(60deg, #f15a22 0%, #cdd72a 60%)'

          },
          '.degrade-200' : {
                  background: 'linear-gradient(135deg, #100F2C 0%, #1f2b5e 80%)'
          },
          '.h-fullscreen': {
              height: 'calc(100vh - 74px)'
          },
      })

      addComponents({...buttons, });
  })],
}
