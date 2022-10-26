import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "views/home/Dashboard.js";
import Settings from "views/home/Settings.js";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer";
import Berita from "views/home/Berita";

export default function Admin() {
  return (
    <>
      {" "}
      <IndexNavbar fixed />
      <Switch>
        <Route path="/home/dashboard" exact component={Dashboard} />
        <Route path="/kategori=:tipe_kategori" exact component={Settings} />
        <Route path="/cari_berita=:judul" exact component={Berita} />
        <Redirect from="/home" to="/home/dashboard" />
      </Switch>
      <Footer />
    </>
  );
}
