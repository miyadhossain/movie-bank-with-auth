import React from "react";
import "./MovieList.css";

const MovieList = ({ movie }) => {
  const { poster, genre, director, title, totalVoted } = movie;
  return (
    <div className="card" style={{ width: "18rem", margin: "30px" }}>
      <div
        className="justify-content-center align-items-center bookCard"
        style={{ backgroundColor: "#F1F1F1", borderRadius: "10px" }}
      >
        <img className="icon mx-auto d-block" src={poster} alt="" />
      </div>
      <div className="card-body text-center">
        <h5 className="fw-bold">{title}</h5>
        <p>Genre: {genre}</p>
        <p>Director: {director}</p>
        <h6 className="">Votes: {totalVoted}</h6>
      </div>
    </div>
  );
};

export default MovieList;
