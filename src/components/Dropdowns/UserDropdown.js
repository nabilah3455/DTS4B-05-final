import React from "react";
import { createPopper } from "@popperjs/core";
import User from "../../assets/img/user-blank.png";
import { useUserAuth } from "context/UserAuthContext";
import { useHistory } from "react-router";

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const { logOut, user } = useUserAuth();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

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
          "bg-white text-base z-50 float-left list-none text-left"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-2  block w-full whitespace-nowrap bg-transparent text-red font-bold bg-blue"
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
