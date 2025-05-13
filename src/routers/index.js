import Home from "../pages/Home/Index";
import Following from "../pages/Following/Index";
import Profile from "../pages/Profile/Index";
import HeaderOnly from "../components/Layout/HeaderOnly";
import Play from "../pages/PlayMusic/Play";
import routesConfig from '../config/routes'



//public routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile, layout: HeaderOnly },
    { path: '/play', component: Play },


];

//private routes
const privateRoutes = [

];


export { publicRoutes, privateRoutes }

