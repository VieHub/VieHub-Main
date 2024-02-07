import supabase from "../../../api/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const Login = () => (
  <div className="mt-20 h-full w-full p-5 md:p-10">
    <div className="mx-auto max-w-md">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google", "discord", "github"]}
        redirectTo={window.location.host}
      />
    </div>
  </div>
);

export default Login;
