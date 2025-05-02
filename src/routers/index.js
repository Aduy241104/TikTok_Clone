import Home from "../pages/Home/Index";
import Following from "../pages/Following/Index";
import Profile from "../pages/Profile/Index";
import HeaderOnly from "../components/Layout/HeaderOnly";



//public routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/Following", component: Following },
    { path: "/Profile", component: Profile, layout: HeaderOnly }

];

//private routes
const privateRoutes = [

];


export { publicRoutes, privateRoutes }

