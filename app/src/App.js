import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { RecoilRoot } from "recoil";
import "./App.scss";

const router = createBrowserRouter(routes);

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
