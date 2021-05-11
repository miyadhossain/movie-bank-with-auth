import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MovieList from "../MovieList/MovieList";
import Navbar from "../Navbar/Navbar";

const Movies = () => {
  const { register, errors, handleSubmit } = useForm({});
  const [info, setInfo] = useState({});
  const [movies, setMovies] = useState([]);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category", info.category);
    formData.append("language", info.language);
    formData.append("genre", info.genre);
    formData.append("sort", info.sort);

    fetch("https://hoblist.com/movieList", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <h3 className="text-center">Search Movies</h3>
      <form onSubmit={handleForm} className="formStyle mt-4">
        <label className="labelStyle">Category</label>
        <input
          onBlur={handleBlur}
          className="inputStyle"
          type="text"
          name="category"
          placeholder="Type Category"
          ref={register({
            required: "You must specify your movie category",
          })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
        <label className="labelStyle">Languages</label>
        <input
          onBlur={handleBlur}
          className="inputStyle"
          name="language"
          placeholder="Type Languages"
          ref={register({
            required: "You must specify your movie language",
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
        <label className="labelStyle">Genre</label>
        <input
          onBlur={handleBlur}
          className="inputStyle"
          name="genre"
          type="text"
          placeholder="Genre"
          ref={register({
            required: "You must specify your movie genre",
          })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <label className="labelStyle">Sort</label>
        <input
          onBlur={handleBlur}
          className="inputStyle"
          name="sort"
          type="text"
          placeholder="Sort"
          ref={register({
            required: "You must type your movie sort",
          })}
        />

        <button type="submit" className="inputStyle">
          Search Movies
        </button>
      </form>

      <div className="row">
        <div className="col-md-12 justify-content-center">
          <div className="row justify-content-center">
            {movies.map((movie) => (
              <MovieList key={movie._id} movie={movie}></MovieList>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
