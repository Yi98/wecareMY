import VueRouter from 'vue-router';
import Index from './components/Index';
import Search from './components/Search';

const router = new VueRouter({
  base: __dirname,
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/search', name: 'Search', component: Search, props: true }
    // { path: '*', name: 'PageNotFound', component: PageNotFound }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});

export default router;
