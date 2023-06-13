import Splash from "../Screens/SplashScreen";
import TabNavigator from "../Navigation/TabNavigation";
import Login from "../Screens/Login";
import EventForm from "../Component/Forms/EventForm";
import SubCategories from "../Screens/SubCategories";
import Sucess from "../Screens/Sucess";
import EventDetails from "../Screens/EventDetails";

export const StackNavigation = [
  {
    name: "SplashScreen",
    component: Splash,
  },
  {
    name: "Login",
    component: Login,
  },
  {
    name: "EventForm",
    component: EventForm,
  },
  {
    name: "TabNavigation",
    component: TabNavigator,
  },
  {
    name: "SubCategories",
    component: SubCategories,
  },
  {
    name: "Sucess",
    component: Sucess,
  },
  {
    name: "EventDetails",
    component: EventDetails,
  },
];
