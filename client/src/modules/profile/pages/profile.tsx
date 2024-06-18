function extractFirstName(email: string): string {
  const username = email.split("@")[0];
  const nameWithoutNumbers = username.replace(/[0-9]/g, "");
  return (
    nameWithoutNumbers.charAt(0).toUpperCase() + nameWithoutNumbers.slice(1)
  );
}
import React, { useState } from "react";
import account from "@/assets/icons/account.png";
import location from "@/assets/icons/location2.svg";
import { NavLink, Outlet } from "react-router-dom";
import { useUserData } from "@/hooks/users/useUserData"; // Import the custom hook
import { useAuth } from "@/contexts/AuthContext";

const Profile: React.FC = () => {
  const [skills, setSkills] = useState(["React", "Node.js", "JavaScript"]);
  const [newSkill, setNewSkill] = useState("");
  const [bio, setBio] = useState(
    "Passionate developer with a love for creating web applications.",
  );
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [newBio, setNewBio] = useState(bio);
  const auth = useAuth();

  const { data, error, isLoading } = useUserData(auth?.user?.uid || "");

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleEditBio = () => {
    setBio(newBio);
    setIsEditingBio(false);
  };

  if (error) return <div>Error loading user data</div>;

  const firstName = data ? extractFirstName(data.email) : "User";

  return (
    <div className="body h-full w-full">
      <div className="profile-first-div">
        <div className="profile-image-container">
          <img src={account} alt="Profile" className="profile-image" />
        </div>

        <div className="profile-text">
          <h1 className="profile-name ml-12 mt-24">
            {" "}
            {isLoading ? "" : firstName}
          </h1>
          <p className="profile-description">Host</p>
        </div>
      </div>
      <div className="profile-details">
        <div className="mb-4 flex flex-row items-center">
          <img
            src={location}
            alt="location"
            className="location-image mt-1.5"
          />
          <p className="profile-location ml-1">New York, USA</p>
        </div>
        <div className="profile-skills mb-4 flex">
          <p className="mr-4 mt-2">Skills</p>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-rectangle ">
                {skill}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a new skill +"
            className="skill-input ml-2"
          />
          <button onClick={handleAddSkill} className="add-skill-button ml-2">
            Add
          </button>
        </div>
        <div className="profile-bio mb-4">
          <p className="bio">Add Bio:</p>
          {isEditingBio ? (
            <>
              <textarea
                value={newBio}
                onChange={(e) => setNewBio(e.target.value)}
                className="bio-textarea"
              />
              <button onClick={handleEditBio} className="save-bio-button">
                Save
              </button>
            </>
          ) : (
            <p onClick={() => setIsEditingBio(true)} className="bio-text">
              {bio}
            </p>
          )}
        </div>
      </div>
      <div className="edit-buttons flex flex-col">
        <button className="edit-btn">Edit information</button>
      </div>
      <div className="profile-third-div mt-24 flex flex-row justify-center">
        <div className="details-buttons flex flex-row justify-center">
          <NavLink
            to="contest"
            className={({ isActive }) =>
              `mt-2 pl-4 pr-4 text-xl text-black ${
                isActive ? "font-bold underline" : "hover:underline"
              }`
            }
          >
            CONTEST
          </NavLink>
          <div className="opacity-2 h-full border-r border-white"></div>
          <NavLink
            to="followers"
            className={({ isActive }) =>
              `mt-2 pl-4 pr-4 text-xl text-black ${
                isActive ? "font-bold underline" : "hover:underline"
              }`
            }
          >
            FOLLOWERS
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Profile;
