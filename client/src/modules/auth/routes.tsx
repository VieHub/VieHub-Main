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
    path: "Signupashost",
    element: <Signup />,
    name: "Signup",
  },
  {
    path: "Signupasparticipant",
    element: <SignupAsHost />,
    name: "SignupAsHost",
  },
  {
    path: "select",
    element: <Select />,
    name: "SignupAsHost",
  },
];
