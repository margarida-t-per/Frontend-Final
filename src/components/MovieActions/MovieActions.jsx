import React from "react";
import style from "./style.module.scss";

const MovieActions = ({ onEdit, onDelete, movieId }) => {
  const handleDeleteClick = () => {
    onDelete(movieId);
  };
  return (
    <div className={style.movieActions}>
      <button className={style.editButton} onClick={onEdit}>
        Edit
      </button>
      <button className={style.deleteButton} onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
};

export default MovieActions;
