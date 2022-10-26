import { Container, Row, Col } from "react-bootstrap";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Dashboard from "views/admin/Dashboard";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer";
import Settings from "views/admin/Settings";
import Berita from "views/admin/Berita";
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
        (<Redirect to="/" />)
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
          {/* </DashboardProvider> */}
          {/* </PrivateRoute> */}
          <Container style={{ width: "400px" }} className="min-h-screen">
            <Row className="flex content-center items-center justify-center h-screen">
              <Col>
                <Route path="/" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
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
