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

function App() {
  const PrivateRoute = ({ ...props }) => {
    if (localStorage.getItem("dataUser")) {
      return <Route {...props} />;
    } else {
      return alert("dsfsdf"), (<Redirect to="/login" />);
    }
  };
  return (
    <>
      {localStorage.getItem("dataUser") ? <IndexNavbar fixed /> : null}
      <Switch>
        <PrivateRoute path="/home" exact component={Dashboard} />
        <PrivateRoute path="/kategori=:tipe_kategori" exact component={Settings} />
        <PrivateRoute path="/cari_berita=:judul" exact component={Berita} />
        <Route path="/" exact component={Login} />
        <Container style={{ width: "400px" }}>
          <Row>
            <Col>
              <UserAuthContextProvider>
                <Route path="/signup" exact component={Signup} />
              </UserAuthContextProvider>
            </Col>
          </Row>
        </Container>
      </Switch>
      {localStorage.getItem("dataUser") ? <Footer /> : null}
    </>
  );
}

export default App;
