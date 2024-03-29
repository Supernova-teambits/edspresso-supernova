import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import LogIn from "../pages/LogIn";
import MyTraining from "../pages/MyTraining";
import NoMatch from "../pages/NotMatch";
import TrainingDetails from "../pages/TrainingDetails";
import RecipeExecution from "../components/RecipeExecution";
import ProgressUpdate from "../pages/ProgressUpdate";
import QuizPage from "../pages/QuizPage";
import UserTestLogin from "../pages/UserTestLogin";

const routes = [
  {
    path: "/",
    element: <Navigate replace to="/login" />,
  },
  {
    path: "/userTestlogin",
    element: <UserTestLogin />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/app",
    element: <Layout />,
    children: [
      {
        path: "myTraining",
        element: <MyTraining />,
      },
      {
        path: "training/:id",
        element: <MyTraining />,
      },
      {
        path: "lesson/:id",
        element: <TrainingDetails />,
      },
      {
        path: "step/:id",
        element: <RecipeExecution />,
      },
      {
        path: "progress/:id",
        element: <ProgressUpdate />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "app/step/6",
    element: <QuizPage />,
  },

  { path: "*", element: <NoMatch /> },
];
export default routes;
