import Vue from "vue"
import Router from "vue-router"
import Landing from "@/components/Landing"
import User from "@/components/User"
import Network from "@/components/Network"
import Profile from "@/components/Profile"
import SignIn from "@/components/SignIn"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Landing",
      component: Landing
    },
    {
      path: "/user",
      name: "User",
      component: User
    },
    {
      path: "/network",
      name: "Network",
      component: Network
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/sign-in",
      name: "SignIn",
      component: SignIn
    }
  ]
})
