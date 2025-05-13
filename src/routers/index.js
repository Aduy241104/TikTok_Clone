import Home from "../pages/Home/Index";
import Following from "../pages/Following/Index";
import Profile from "../pages/Profile/Index";
import HeaderOnly from "../layout/HeaderOnly";
import Play from "../pages/PlayMusic/Play";
import config from "../config";

//public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
    { path: '/play', component: Play },
];

//private routes
const privateRoutes = [

];


export { publicRoutes, privateRoutes }

