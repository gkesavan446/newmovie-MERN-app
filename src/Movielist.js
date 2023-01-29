import { Movie } from "./Movie";
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { API } from './global';
// import { useState } from 'react';
// import { Addmovie } from './Addmovie';

export function Movielist() {

  const navigate = useNavigate();

  const [movielist, setMovielist] = useState([]);

  const getMovies = () => {
    fetch(`${API}`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((data) => setMovielist(data))
  };

  useEffect(() => getMovies(), [])

  const deleteMovie = (id) => {
    fetch(`${API}/${id}`, {
      method: 'DELETE'
    }).then((data) => getMovies());
  };

  const editMovie = (id) => {
    fetch(`${API}/${id}`, {
      method: 'GET'
    }).then(res => res.json()).then(data => console.log(data))
    navigate(`/movies/edit/${id}`)
  }

  return (
    <div className="movie-list">
      {movielist.map((mv, index) => (
        <div key={mv.id}>
          <Movie id={mv._id} movie={mv}
            deleteButton={
              <IconButton
                sx={{ marginLeft: "auto" }}
                onClick={() => deleteMovie(mv._id)} color="error"
                aria-label="delete">
                <DeleteIcon />
              </IconButton>}
            editButton={
              <IconButton
                sx={{ marginLeft: "auto" }}
                onClick={() => navigate(`/movies/edit/${mv._id}`)} color="success"
                aria-label="edit">
                < EditIcon />
              </IconButton>} />
        </div>
      ))}
    </div>
  );
}

{/* deleteButton={<button
          onClick={()=> deleteMovie(mv.id)}
          >Delete Me</button>} /> */}