import Categories from "../Screens/Categories";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Saved from "../Screens/Saved";

export const TabNavigation = [
  {
    name: "Home",
    component: Home,
    image: require("../Assets/ICONS/home.png"),
  },
  {
    name: "Categories",
    component: Categories,
    image: require("../Assets/ICONS/categories.png"),
  },
  {
    name: "Saved",
    component: Saved,
    image: require("../Assets/ICONS/save.png"),
  },
  {
    name: "Profile",
    component: Profile,
    image: require("../Assets/ICONS/profile.png"),
  },
];
