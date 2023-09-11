import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import React, { useState } from "react";

const LoginPage = () => {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      {currentForm == "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
};
export default LoginPage;
