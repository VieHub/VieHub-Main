import Login from "../auth/pages/Login";
import Signup from "../auth/pages/signup"
import SignupAsHost from "../auth/pages/signupAsHost"
import Select from "../auth/pages/select_H_Or_B"


export default [
  {
    path: "login",
    element: <Login />,
    name: "Login",
  },
  {
    path: "Signupasparticipant",
    element: <Signup />,
    name: "Signup",
  },
  {
    path: "Signupashost",
    element: <SignupAsHost />,
    name: "SignupAsHost",
  },
  {
    path: "Signup",
    element: <Select />,
    name: "SignupAsHost",
  },
];
