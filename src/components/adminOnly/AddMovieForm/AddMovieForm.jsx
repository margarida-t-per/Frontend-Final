import React, { useState } from "react";

const AddMovieForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    releaseDate: "",
    trailerLink: "",
    posterUrl: "",
    genres: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "genres") {
      const genresArray = value.split(",").map((genre) => genre.trim());
      setFormData({
        ...formData,
        genres: genresArray,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4050/api/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Movie added successfully");
      } else {
        console.error("Failed to add movie");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="releaseDate">Release Date:</label>
        <input
          type="date"
          id="releaseDate"
          name="releaseDate"
          value={formData.releaseDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="trailerLink">Trailer Link:</label>
        <input
          type="text"
          id="trailerLink"
          name="trailerLink"
          value={formData.trailerLink}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="posterUrl">Poster URL:</label>
        <input
          type="text"
          id="posterUrl"
          name="posterUrl"
          value={formData.posterUrl}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="genres">Genres:</label>
        <input
          type="text"
          id="genres"
          name="genres"
          value={formData.genres.join(", ")}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
