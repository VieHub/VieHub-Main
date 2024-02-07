import { forwardRef, useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

interface TextInputProps {
  placeholder?: string;
  type?: "text" | "password";
}

const TextInput = forwardRef(
  ({ placeholder, type = "text", ...props }: TextInputProps, ref: any) => {
    const [isPassword, setIsPassword] = useState(true);

    const togglePassword = () => {
      setIsPassword(!isPassword);
    };
    return (
      <div className="relative w-full sm:w-[450px]">
        <input
          type={isPassword ? type : "text"}
          placeholder={placeholder}
          className="input input-bordered input-md w-full rounded-sm"
          {...props}
          ref={ref}
        />
        {type === "password" && (
          <div className="absolute right-3 top-[13px] cursor-pointer">
            {isPassword ? (
              <VisibilityOutlinedIcon
                fontSize="small"
                onClick={togglePassword}
              />
            ) : (
              <VisibilityOffOutlinedIcon
                fontSize="small"
                onClick={togglePassword}
              />
            )}
          </div>
        )}
      </div>
    );
  },
);

export default TextInput;
