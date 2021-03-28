import SharedLayout from "@/pages/Shared/SharedLayout.vue";
import AuthLayout from "@/pages/Shared/AuthLayout.vue";

// Pages
const Login = () =>
  import("@/pages/Login/Login.vue");
const Register = () =>
  import("@/pages/Register/Register.vue");
const Landing = () =>
  import("@/pages/Landing/Landing.vue");

  let dashboardRoutes = {
    path: "/",
    component: SharedLayout,
    redirect:"/landing",
    children:[
      {
        path:"landing",
        name:"Landing",
        components: {default: Landing}
      }
    ]
  }

  let authRoutes = {
    path: "/",
    component: AuthLayout,
    redirect:"/login",
    children:[
      {
        path:"login",
        name:"Login",
        components: {default: Login}
      },
      {
        path:"register",
        name:"Register",
        components: {default: Register}
      }
    ]
  }

  const routes = [
    {
        path: "/",
        redirect:"/landing",
        name: "Home",
    },
    authRoutes,
    dashboardRoutes
  ]

  export default routes;
