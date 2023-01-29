import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState, useEffect } from "react";
import { API } from './global';
export function Moviedetails() {
  const { id } = useParams();

  // const movie = movielist[id];
  // console.log(movie);

  const [movie, setMovie] = useState([]);



  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }, [])



  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="650"
        src={movie.trailer}
        title={movie.name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h1>{movie.name}</h1>
          <p>⭐{movie.rating}</p>
        </div>
        <p>{movie.summary}</p>
        <Button variant="contained" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
          Back</Button>
      </div>
    </div>
  );
}
