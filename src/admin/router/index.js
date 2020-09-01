import Vue from "vue";
import Router from "vue-router";
import Works from "../pages/Works";
import Reviews from "../pages/Reviews";
import Login from "../pages/Login";
import axios from "axios";


Vue.use(Router);
export const router = new Router({
    routes: [
        {
            path: '/works',
            component: Works
        },
        {
            path: '/reviews',
            component: Reviews
        },
        {
            path: '/',
            component: Login,
            meta: {
                public: true
            }
        }
    ]
});


router.beforeEach(async (to, from, next) => {
    const isPublicRoute = to.matched.some(record => record.meta.public);
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM4MCwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTg5Nzc1OTUsImV4cCI6MTU5ODk5NTU5NSwibmJmIjoxNTk4OTc3NTk1LCJqdGkiOiJNU1NBNWlsSTVqRjI0b2p6In0.TScVSd9RnklYmIh6uASNWyfgApMo07zVCSrCp4GuB6g';
    if (!isPublicRoute) {
        axios.defaults.headers['Authorization'] = `Bearer ${token}`;
        try {
            const response = await axios.get('https://webdev-api.loftschool.com/user');
            console.log(response)
            next();
        }catch (e) {
            router.replace('/');
        }
    } else {
        next();
    }
});
