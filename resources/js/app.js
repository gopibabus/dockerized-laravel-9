require('./bootstrap');

import {createApp, ref} from 'vue';
import {Quasar} from  'quasar';
import 'quasar/dist/quasar.sass';
import App from './components/App.vue';

const app = createApp(App, {
    setup () {
        return {
            persistent: ref(false)
        }
    }
});
app.use(Quasar,{ config: {} });
app.mount('#app');
