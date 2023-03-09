import {createRouter, createWebHashHistory} from 'vue-router';
import Storage from '@/utils/DeviceStorage';

const routes = [
    
    {
        path: '/', 
        name: 'Login',
        component: () => import('@/views/Login/login'),
         meta: {
            title: '登录',
          }, 
      },
]

// export const asyncRouterMap = [

// ]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})



export default router