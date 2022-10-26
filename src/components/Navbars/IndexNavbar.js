/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown";
import KategoriDropdown from "components/Dropdowns/KategoriDropdown";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const kategori = [
    {
      id: "economy",
      tipe: "Ekonomi",
    },
    {
      id: "sport",
      tipe: "Olahraga",
    },
    {
      id: "lifestyle",
      tipe: "Gaya Hidup",
    },
    {
      id: "celebrity",
      tipe: "Entertainment",
    },
    {
      id: "techno",
      tipe: "Teknologi",
    },
  ];

  const histori = useHistory();

  const kategoriLink = (tipe) => {
    histori.push("/kategori=" + tipe);
    window.location.reload()
  };

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Indonesia Terkini
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              
            <li className="flex items-center">
                <a
                  className="text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold mr-4"
                  href="/home"
                >
                 Beranda
                </a>
              </li>
              {kategori.map((el, index) => {
                return (
                  <li className="flex items-center" key={index}>
                    <a
                      className="text-blueGray-700 cursor-pointer px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold mr-4"
                      onClick={() => kategoriLink(el.id)}
                    >
                      {el.tipe}
                    </a>
                  </li>
                );
              })}
              <li className="flex items-center">
                <UserDropdown />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
