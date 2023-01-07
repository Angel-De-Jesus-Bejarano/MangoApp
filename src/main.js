import { createApp } from 'vue';
import { Vue3Mq} from 'vue3-mq';
import './style.css';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import router from './router';
import App from './App.vue';


library.add(faUserSecret)
createApp(App)
.mount('#app')
.use(Vue3Mq,{
    preset : 'tailwind'
})
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)


