import React, { Suspense, lazy, Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { AuthProvider } from "../../components/contexts/AuthContext";
import { Container } from "react-bootstrap";
import { PrivateRoute } from "../../components/privateRoute";

const SignUp = lazy(() => import("../../Views/SignUp"));
const Dashboard = lazy(() => import("../../Views/Dashboard"));
const Login = lazy(() => import("../../Views/Login"));
const ErrorNotFound = lazy(() => import("../../Views/ErrorNotFound"));
const ForgotPassword = lazy(() => import("../../Views/ForgotPassword"));
const UpdateProfile = lazy(() => import("../../Views/UpdateProfile"));

function App() {
  return (
    <Fragment>
      {/* Landing */}
      <Suspense
        fallback={
          <div>
            <h6 className="mt-3">
              Please wait your page is on it's way.
              <small>
                At least I think it is <strong>;)</strong>
              </small>
            </h6>
          </div>
        }
      >
        <Container
          style={{ minHeight: "100vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <div style={{ maxWidth: "400px" }} className="w-100">
            <AuthProvider>
              <Switch>
                <PrivateRoute path="/updateprofile" component={UpdateProfile} />
                <Route path="/forgotpassword" component={ForgotPassword} />
                <Route path="/signup" component={SignUp} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/SignUp" />}
                />
                <Route component={ErrorNotFound} />
              </Switch>
            </AuthProvider>
          </div>
        </Container>
      </Suspense>

      {/* About

      <Suspense
        fallback={
          <div>
            <h6 className="mt-3">
              Please wait your page is on it's way.
              <small>
                At least I think it is <strong>;)</strong>
              </small>
            </h6>
          </div>
        }
      >
        
      </Suspense> */}
    </Fragment>
  );
}

export default App;
