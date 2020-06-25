import React from "react";

const MovieForm = (props) => {
  return (
    <div>
      <h1>Movie {props.movie._id}</h1>
      <button>Save</button>
    </div>
  );
};

export default MovieForm;
