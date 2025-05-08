import Home from "../pages/Home/Index";
import Following from "../pages/Following/Index";
import Profile from "../pages/Profile/Index";
import HeaderOnly from "../components/Layout/HeaderOnly";
import Play from "../pages/PlayMusic/Play";



//public routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/Following", component: Following },
    { path: "/Profile", component: Profile, layout: HeaderOnly },
    { path: '/play', component: Play }

];

//private routes
const privateRoutes = [

];


export { publicRoutes, privateRoutes }

