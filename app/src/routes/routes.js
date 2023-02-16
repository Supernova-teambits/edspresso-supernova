import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import LogIn from "../pages/LogIn";
import MyTraining from "../pages/MyTraining";
import NoMatch from "../pages/NotMatch";

const routes = [
  {
    path: '/',
    element: <Navigate replace to="/login" />
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: '/app',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MyTraining />
      },
      {
        path: 'training/:id',
        element: <MyTraining />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
    ]
  },
  { path: "*", element: <NoMatch /> },
];
export default routes;
