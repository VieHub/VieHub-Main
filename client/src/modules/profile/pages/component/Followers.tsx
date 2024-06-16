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
          { id: 1, name: "John Doe", photoUrl: accountPlaceholder },
          { id: 2, name: "Jane Smith", photoUrl: accountPlaceholder },
          { id: 3, name: "Alice Johnson", photoUrl: accountPlaceholder },
          { id: 4, name: "Bob Brown", photoUrl: accountPlaceholder },
        ];
        setFollowers(data); // Simulating setting fetched data
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
    };

    fetchFollowers();
  }, []);

  return (
    <div className="h-full w-full body ">
      <div className="followers-container p-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {followers.map((follower) => (
            <div
              key={follower.id}
              className="follower-card flex items-center bg-white rounded-lg shadow-lg p-4"
            >
              <img
                src={follower.photoUrl}
                alt={`Profile of ${follower.name}`}
                className="w-12 h-12 rounded-full mr-4"
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
