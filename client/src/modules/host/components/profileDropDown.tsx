import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion for animations
import { useAuth } from "@/contexts/AuthContext";

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const logout = async () => {
    console.log("Logging out...");
    await auth?.logout();
    await navigate("/login");
  };

  return (
    <div className="relative">
      {
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, type: "tween", ease: "easeOut" }} // Smooth transition
          className="absolute right-0 z-50 mt-2 w-48 rounded-md bg-white py-1 shadow-lg"
        >
          <motion.a
            whileHover={{ backgroundColor: "#F3F4F6", color: "#111827" }} // Example of hover animation
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            onClick={() => navigate("/profile")}
          >
            Profile
          </motion.a>
          <motion.a
            whileHover={{ backgroundColor: "#F3F4F6", color: "#111827" }} // Example of hover animation
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            onClick={logout}
          >
            Logout
          </motion.a>
        </motion.div>
      }
    </div>
  );
};

export default ProfileDropdown;
