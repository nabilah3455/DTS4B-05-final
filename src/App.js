import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  UserAuthContextProvider,
  useUserAuth,
} from "./context/UserAuthContext";
import Dashboard from "views/admin/Dashboard";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer";
import Settings from "views/admin/Settings";
import Berita from "views/admin/Berita";
import { useEffect } from "react";
import Swal from "sweetalert2";

function App() {
  const PrivateRoute = ({ ...props }) => {
    if (localStorage.getItem("dataUser") !== "null") {
      return <Route {...props} />;
    } else {
      return (
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Silahkan login terlebih dahulu",
        }),
        (<Redirect to="/login" />)
      );
    }
  };

  return (
    <>
      <UserAuthContextProvider>
        {localStorage.getItem("dataUser") !== "null" ? (
          <IndexNavbar fixed />
        ) : null}

        <Switch>
          {/* <PrivateRoute> */}
          <PrivateRoute path="/home" component={Dashboard} />
          <PrivateRoute path="/kategori=:tipe_kategori" component={Settings} />
          <PrivateRoute path="/cari_berita=:judul" component={Berita} />
          {/* </PrivateRoute> */}
          <Container style={{ width: "400px" }}>
            <Row>
              <Col>
                <Route path="/" component={Login} />
                <Route path="/signup" component={Signup} />
              </Col>
            </Row>
          </Container>
        </Switch>
      </UserAuthContextProvider>
      {localStorage.getItem("dataUser") !== "null" ? <Footer /> : null}
    </>
  );
}

export default App;
