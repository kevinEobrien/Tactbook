import Vue from "vue"
import Router from "vue-router"
import Landing from "@/components/Landing"
import User from "@/components/User"
import Network from "@/components/Network"
import Profile from "@/components/Profile"
import SignIn from "@/components/SignIn"
import EditProfile from "@/components/EditProfile"
import About from "@/components/About"
import AddFriends from "@/components/AddFriends"


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
    },
    {
      path: "/edit-profile",
      name: "EditProfile",
      component: EditProfile
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/add-friends",
      name: "AddFriends",
      component: AddFriends
    }
    
  ]
})
