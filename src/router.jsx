// import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
// import Settings from "./pages/Settings";
// import Contact from "./pages/Contact";
// import Layout from "./components/layout";

import Administration from "./pages/Administration";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/signUp/SignUp";
import Home from './pages/Home';
import SignIn from "./pages/signIn/SignIn";

// import Home from "./pages/layout/Home";

// export const router  = createBrowserRouter([
//     {path: '/', element: <App />},
//     {path: '/dashboard', element: <Layout><Settings /></Layout>},
//     {path: '/contact', element:<Layout> <Contact /></Layout>},
//   ])


export const AuthRoutes = [
  // { name: "/", element: Home },
  { name: "/dashboard", element: Dashboard },
  { name: "/administration", element: Administration },
]

export const HomeRoutes = [
  {name: '/', element: Home},
  {name: '/signin', element: SignIn},
  {name: '/signup', element: SignUp},
]
export const CorporateRoutes = []