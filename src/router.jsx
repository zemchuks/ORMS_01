// import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
// import Settings from "./pages/Settings";
// import Contact from "./pages/Contact";
// import Layout from "./components/layout";

import Administration from "./pages/Administration";
import Dashboard from "./pages/Dashboard";

// export const router  = createBrowserRouter([
//     {path: '/', element: <App />},
//     {path: '/dashboard', element: <Layout><Settings /></Layout>},
//     {path: '/contact', element:<Layout> <Contact /></Layout>},
//   ])


export const AuthRoutes = [
  {name: "/", element: Dashboard},
  {name: "/administration", element: Administration},
]

export const AdminRoutes = []
export const CorporateRoutes = []