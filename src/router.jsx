import Administration from "./pages/Administration";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import CompanySignup from "./pages/forms/CompanySignup";
import SignIn from "./pages/forms/SignIn";
import SignUp from "./pages/forms/SignUp";

export const AuthRoutes = [
  // { name: "/", element: Home },
  { name: "/dashboard", element: Dashboard },
  { name: "/administration", element: Administration },
]

export const HomeRoutes = [
  {name: '/', element: Home},
  {name: '/signin', element: SignIn},
  {name: '/signup', element: SignUp},
  {name: '/entitysignup', element: CompanySignup},
]
export const CorporateRoutes = []