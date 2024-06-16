import Profile from "./pages/profile";
import ProfileContest from "./pages/component/contest";
import Followers from "./pages/component/FOLLOWERS";
import { Navigate } from "react-router-dom";


export default [
    {
        path: "profile",
        element: <Profile />,
        name: "VieHub",
        children: [
          {
            path: "contest",
            element: <ProfileContest />,
            name: "profileContest",
          },
          {
            path: "followers",
            element: <Followers />,
            name: "Followers",
          },
          {
            path: "",
            element: <Navigate to="profileContest" />,
            name: "Default",
          },
        ]
      },
]