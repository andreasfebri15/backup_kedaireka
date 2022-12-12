import { createRouter, createWebHistory } from "vue-router";
import Beranda from "@/components/MenuBeranda.vue";
import Maps from "@/components/MenuMaps.vue";
import Bantuan from "@/components/MenuBantuan.vue";
import Login from "@/components/MenuLogin.vue";
import Admin_Page from "@/components/AdminPage.vue";
import Dashboard from "@/components/MenuDashboard.vue";
import Visual_Page from "@/components/VisualPage.vue";
import CreateMenu from "@/components/CreateMenu.vue";
import KalkulIsai from "@/components/KalkulIsai.vue";
import MainGraph from "@/components/MainGraph.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
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
    path: "/visual_page/:id",
    name: "visual_page",
    component: Visual_Page,
  },
  {
    path: "/admin_page",
    name: "admin_page",
    component: Admin_Page,
  },
  {
    path: "/create_menu",
    name: "create_menu",
    component: CreateMenu,
  },
  {
    path: "/kalkulisai",
    name: "kalkulisai",
    component: KalkulIsai,
  },
  {
    path: "/main_graph",
    name: "main_graph",
    component: MainGraph,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("authenticated"));
  setTimeout(() => {
    localStorage.removeItem("authenticated");
    location.reload();
  }, 3600000);
  if (
    to.name !== "dashboard" &&
    to.name !== "beranda" &&
    to.name !== "maps" &&
    to.name !== "bantuan" &&
    to.name !== "login" &&
    to.name !== "visual_page" &&
    to.name !== "main_graph" &&
    to.name !== "kalkulisai" &&
    to.name !== "loading" &&
    !isAuthenticated
  )
    next({ name: "login" });
  else if (to.name == "login" && isAuthenticated) next({ name: "admin_page" });
  else next();
});

export default router;
