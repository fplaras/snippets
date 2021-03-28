import VueRouter from 'vue-router';
import routes from './routes';
import firebase from 'firebase';

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

router.beforeEach((to, from, next) => {
 
  firebase.auth().onAuthStateChanged(user =>  {
    if (user) {
      next();
    } else {
      if(to.name !=='Login') next({ name: 'Login' });
      next();
    }
  });
})

export default router;
