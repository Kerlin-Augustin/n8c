import { RouteObject } from "react-router-dom";
import LandingPage from "../pages/home/LandingPage"
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Prospecting from "../pages/dashboard/prospecting/Prospecting";
import SearchQuery from "../components/searchquery/SearchQuery";
import Screening from "../pages/dashboard/screening/Screening";
import Modeling from "../pages/dashboard/modeling/Modeling";
import SignupPage from "../pages/auth/signup/SignupPage";
import LoginPage from "../pages/auth/login/LoginPage";

const routes: RouteObject[] = [
  {path: '/', element: <LandingPage />},
  {
    path: '/dashboard',
    element: <DashboardLayout />, 
    children: [
      {path: "", element: <SearchQuery />},
      {path: "prospecting", element: <Prospecting />},
      {path: "screening", element: <Screening />},
      {path: "modeling", element: <Modeling/>},
    ]
  },
  {path: '/signup', element: <SignupPage />},
  {path: '/login', element: <LoginPage />},
]

export default routes