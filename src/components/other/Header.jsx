/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const Header = ({ data ,changeUser }) => {
  const [userName, setuserName] = useState(null);
  const logOutUser = () => {
    localStorage.setItem('loggedIn','')
    changeUser('')
  };

  useEffect(() => {
    if (!data) {
      setuserName("admin");
    } else {
      setuserName(data.firstName);
    }
  }, []);

  return (
    <div className="flex items-center justify-between py-2">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">
          {userName} <span id="hand">👋</span>
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className="bg-red-600 text-base font-medium text-white p-3 rounded-md"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
