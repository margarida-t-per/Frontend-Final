import style from "./style.module.scss";
import React, { useState } from "react";
import MoviesList from "../../components/MovieList/MovieList";

const Main = () => {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className={style.main__container}>
      <MoviesList></MoviesList>
    </div>
  );
};
export default Main;
