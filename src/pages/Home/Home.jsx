import style from "./style.module.scss";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import React, { useState } from "react";
import MoviesList from "../../components/MovieList/MovieList";
import AddMovieForm from "../../components/adminOnly/AddMovieForm/AddMovieForm";

const Main = () => {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      <MoviesList></MoviesList>
      <AddMovieForm></AddMovieForm>
    </div>
  );
};
export default Main;
