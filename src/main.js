import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router/ViewRouter';
import store from './store/index.js';
import * as ElICons from '@element-plus/icons-vue';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css'
import 'default-passive-events'
nProgress.configure({
    easing: 'ease',
    speed: 500,
    showSpinner: false,
    trickleSpeed: 200,
    minimum: 0.3
})
router.beforeEach((to, from, next) => {
    nProgress.start();
    next()
})
router.afterEach(() =>{
    nProgress.done()
})
const app = createApp(App);

for (const name in ElICons) {
    app.component(name,ElICons[name])
}

app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount("#app")
