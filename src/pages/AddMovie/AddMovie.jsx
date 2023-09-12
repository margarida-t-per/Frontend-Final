import style from "./style.module.scss";
import AddMovieForm from "../../components/adminOnly/AddMovieForm/AddMovieForm";

const AddMovie = () => {
  return (
    <div className={style.main__container}>
      <AddMovieForm></AddMovieForm>
    </div>
  );
};

export default AddMovie;
