import VueRouter from 'vue-router';
import Index from './components/Index';
import Search from './components/Search';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/search', name: 'Search', component: Search }
    // { path: '*', name: 'PageNotFound', component: PageNotFound }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});

export default router;