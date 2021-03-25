import SharedLayout from 'src/pages/Layout/SharedLayout.vue';
import AuthLayout from 'src/pages/Layout/AuthLayout.vue';

// Pages
const Login = () =>
  import('src/pages/Login/Login.vue');
const Register = () =>
  import('src/pages/Register/Register.vue');
const Landing = () =>
  import('src/pages/Landing/Landing.vue');

  let dashboardRoutes = {
    path: '/home',
    component: SharedLayout,
    redirect:'/landing',
    name: 'Home',
    children:[
      {
        path:'landing',
        name:'Landing',
        components: {default: Landing}
      }
    ]
  }

  let authRoutes = {
    path: '/',
    component: AuthLayout,
    redirect:'/login',
    name: 'Home',
    children:[
      {
        path:'login',
        name:'Login',
        components: {default: Login}
      },
      {
        path:'login',
        name:'Register',
        components: {default: Register}
      }
    ]
  }

  const routes = [
    {
        path: '/',
        redirect:'/landing',
        name: 'Home',
    },
    authRoutes,
    dashboardRoutes
  ]

  export default routes;
