import React, { useEffect, useState } from "react";
import accountPlaceholder from "@/assets/icons/account.png";

const Followers: React.FC = () => {
  const [followers, setFollowers] = useState<any[]>([]);

  // Simulating fetching followers data from an API
  useEffect(() => {
    // Example: Fetch followers data from an API
    const fetchFollowers = async () => {
      try {
        // Replace with actual API call to fetch followers data
        // Example data for demonstration
        const data = [
          { id: 1, name: "Ahmed Mansy", photoUrl: accountPlaceholder },
          { id: 2, name: "Abd El malek", photoUrl: accountPlaceholder },
        ];
        setFollowers(data); // Simulating setting fetched data
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
    };

    fetchFollowers();
  }, []);

  return (
    <div className="body h-full w-full ">
      <div className="followers-container p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {followers.map((follower) => (
            <div
              key={follower.id}
              className="follower-card flex items-center rounded-lg bg-white p-4 shadow-lg"
            >
              <img
                src={follower.photoUrl}
                alt={`Profile of ${follower.name}`}
                className="mr-4 h-12 w-12 rounded-full"
              />
              <div>
                <p className="text-lg font-semibold">{follower.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Followers;
