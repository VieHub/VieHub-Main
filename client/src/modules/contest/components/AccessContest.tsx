import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "@/api/apiClient";

const AccessContest: React.FC = () => {
  const [searchParams] = useSearchParams();
  const contestId = searchParams.get("contest_id");
  const accessKey = searchParams.get("access_key");
  const [code, setCode] = useState<string>(accessKey || "");
  const [contestData, setContestData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const handleAccess = async () => {
    try {
      const response = await api.post("/api/private-contest/access", {
        contest_id: contestId,
        key: code,
      });
      setContestData(response.data);
      setError("");
    } catch (err) {
      setError("Invalid access key or contest not found.");
    }
  };

  return (
    <div className="access-contest">
      <h1>Access Contest</h1>
      <div>
        <label htmlFor="access-code">Enter Access Code:</label>
        <input
          type="text"
          id="access-code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={handleAccess}>Access</button>
      </div>
      {error && <p className="error">{error}</p>}
      {contestData && (
        <div className="contest-details">
          <h2>{contestData.title}</h2>
          <p>{contestData.description}</p>
          {/* Display other contest details as needed */}
        </div>
      )}
    </div>
  );
};

export default AccessContest;
