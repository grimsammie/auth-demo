import React, { useState, useEffect } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../components/contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Dashboard = () => {
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();
  const [error, setError] = useState("");

  const handleLogout = async () => {
    setError("");

    try {
      await logOut();
      history.push("/login");
    } catch (err) {
      setError("Failed to logout");
    }
  };

  const { currentUser, logOut } = useAuth();

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (loaded) {
    return (
      <>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email: {currentUser.email}</strong>
            <Link to="/updateprofile" className="btn btn-primary w-100 mt-3">
              Update Profile
            </Link>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <p>Loading About</p>
      </div>
    );
  }
};

export default Dashboard;
