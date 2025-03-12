"use client";

import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error("Error caught by ErrorBoundary:", error);
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return (
      <div
        style={{ color: "red", padding: "10px", backgroundColor: "#ffdddd" }}
      >
        <h2>⚠️ Error:</h2>
        <p>{errorMessage}</p>
        <p>Try modifying your sketch.</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
