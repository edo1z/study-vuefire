import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconFont: 'md'
  },
  theme: {
    themes: {
      light: {
        primary: '#099',
        secondary: '#999',
        accent: '#03f',
        error: '#f30',
        info: '#39c',
        success: '#0f0',
        warning: '#f90',
        anchor: '#3cc'
      }
    }
  }
});
