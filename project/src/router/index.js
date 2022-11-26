import { createWebHistory, createRouter } from "vue-router";
import Beranda from "../components/MenuBeranda.vue";
import Maps from "../components/MenuMaps.vue";
import Bantuan from "../components/MenuBantuan.vue";
import Login from "../components/MenuLogin.vue";
import Admin_Page from "../components/AdminPage.vue";
import Dashboard from "../components/MenuDashboard.vue";
import Visual_Page from "../components/VisualPage.vue";
import NotFoundComponent from "../components/NotFoundComponent.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/beranda",
      name: "beranda",
      component: Beranda,
    },
    {
      path: "/maps",
      name: "maps",
      component: Maps,
    },
    {
      path: "/bantuan",
      name: "bantuan",
      component: Bantuan,
    },
  
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/admin_page",
      name: "admin_page",
      component: Admin_Page,
    },
    {
      path:"/visual_page",
      name: "visual_page",
      component: Visual_Page
    },
    { path: '/:pathMatch(.*)',
      component: NotFoundComponent 
    }
  ],
});

// const isAuthenticated = false;

router.beforeEach((to, _from, next)=>{
  const isAuthenticated = JSON.parse(localStorage.getItem('authenticated'));
  setTimeout(() => {
    localStorage.removeItem('authenticated');
  }, 3600000);
  if(to.name == "admin_page" && !isAuthenticated) next({name: "login"});
  else next();
})

export default router;
