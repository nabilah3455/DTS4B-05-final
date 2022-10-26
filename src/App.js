import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Dashboard from "views/admin/Dashboard";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Switch>
              <Route
                path="/home"
                exact component={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
            </Switch>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
