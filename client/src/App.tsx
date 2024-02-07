import "@/styles/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/PublicRoutes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
