import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "views/admin/Dashboard.js";
import Settings from "views/admin/Settings.js";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer";
import Berita from "views/admin/Berita";

export default function Admin() {
  return (
    <>
      {" "}
      <IndexNavbar fixed />
      <Switch>
        <Route path="/admin/dashboard" exact component={Dashboard} />
        <Route path="/admin/kategori=:tipe_kategori" exact component={Settings} />
        <Route path="/admin/cari_berita=:judul" exact component={Berita} />
        <Redirect from="/admin" to="/admin/dashboard" />
      </Switch>
      <Footer />
    </>
  );
}
