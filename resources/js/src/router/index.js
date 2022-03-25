import { createRouter, createWebHistory } from 'vue-router';

const routes = [{
    path: "/sign-in",
    name: "sign-in",
    component: () => import('@/views/auth/SignIn.vue'),
}];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;