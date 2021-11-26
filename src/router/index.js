import store from '../store';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: () =>
            import(/* webpackChunkName: "welcome" */ '../views/Welcome.vue'),
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: () =>
            import(/* webpackChunkName: "signIn" */ '../views/SignIn.vue'),
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: () =>
            import(/* webpackChunkName: "signUp" */ '../views/SignUp.vue'),
    },
    {
        path: '/join-meeting',
        name: 'JoinMeeting',
        component: () =>
            import(
                /* webpackChunkName: "joinMeeting" */ '../views/JoinMeeting.vue'
            ),
    },
    {
        path: '/host-meeting',
        name: 'HostMeeting',
        component: () =>
            import(
                /* webpackChunkName: "joinMeeting" */ '../views/HostMeeting.vue'
            ),
    },
    {
        path: '/home',
        name: 'Home',
        component: () =>
            import(/* webpackChunkName: "joinMeeting" */ '../views/Home.vue'),
    },
    {
        path: '/history',
        name: 'History',
        component: () =>
            import(/* webpackChunkName: "history" */ '../views/History.vue'),
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (localStorage.getItem('accessToken')) {
        store.commit('auth/SET', ['isAuth', true]);
    }

    if (localStorage.getItem('username') && localStorage.getItem('email')) {
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('email');

        store.commit('auth/SET', ['username', username]);
        store.commit('auth/SET', ['email', email]);
    }

	if (!store.getters['auth/isAuth']) {
		if (to.name !== 'Welcome' && to.name !== 'SignIn' && to.name !== 'SignUp') {
			next({
				path: '/',
				replace: true
			})
		} else next()
	} else {
		if ((to.name === 'Welcome' || to.name === 'SignIn' || to.name === 'SignUp')) {
			console.error('masuk if')
			next({
				path: '/home',
				replace: true
			})
		} else {
			next()
		}
	}
});

export default router;
