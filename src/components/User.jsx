import React from "react";
import { useState } from "react";

const User = () => {
  const [user, setUser] = useState(false);


  return (
    <>
      {" "}
      {!user ? (
        <div>
          <h1>You are Not Logged in</h1>
          <button className="mybtn" onClick={() => setUser(true)}>
            Log in
          </button>
        </div>
      ) : (
        <div>
          <h1>Welcome to your Dashboard</h1>
          <button className="mybtn" onClick={() => setUser(false)}>
            Log out
          </button>
        </div>
      )}
    </>
  );
};

export default User;
