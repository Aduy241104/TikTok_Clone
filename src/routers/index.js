import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import HeaderOnly from "../layout/HeaderOnly";
import Play from "../pages/PlayMusic/Play";
import config from "../config";
import Live from "../pages/Live";
import Login from "../pages/Login";

//public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
    { path: config.routes.live, component: Live },
    { path: '/play', component: Play },
    { path: config.routes.login, component: Login, layout: null }
];

//private routes
const privateRoutes = [

];

export { publicRoutes, privateRoutes }

