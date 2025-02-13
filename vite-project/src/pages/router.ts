import { createRouter,createWebHashHistory} from "vue-router"
import HomePage from "./HomePage.vue";
import LoginPage from "./LoginPage.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes : [
        {

        path:'',
        component: HomePage
    },

    {
        path: '/login',
        component: LoginPage
    }

    ]
    
    

})

export default router;