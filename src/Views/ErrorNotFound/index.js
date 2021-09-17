import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ErrorNotFound = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (loaded) {
    return (
      <Fragment>
        <div>
          <p>404 Error! Page not found</p>
          <Link to="/signup">Go Home</Link>
        </div>
      </Fragment>
    );
  } else {
    return (
      <div>
        <p>Loading About</p>
      </div>
    );
  }
};

export default ErrorNotFound;
