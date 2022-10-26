import React from "react";
import { useUserAuth } from "context/UserAuthContext";
import { useHistory } from "react-router";

const UserDropdown = () => {
  const popoverDropdownRef = React.createRef();

  const { logOut } = useUserAuth();

  const navigate = useHistory();

  const handleLogout = () => {
    logOut();
    navigate.push("/");
    localStorage.removeItem("dataUser");
  };

  return (
    <>
      <div
        ref={popoverDropdownRef}
        className={
          "text-base text-white z-50 float-left list-none text-left rounded"
        }
        style={{ background: "#0d2e42" }}
      >
        <a
          href="/"
          className={
            "text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent font-bold"
          }
          onClick={handleLogout}
        >
          Log Out
        </a>
      </div>
    </>
  );
};

export default UserDropdown;
