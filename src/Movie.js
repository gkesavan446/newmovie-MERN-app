import { Counter } from "./Counter";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import InfoIcon from "@mui/icons-material/Info";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

export function Movie({ movie, id, editButton, deleteButton }) {
  let ratingstyle = { color: movie.rating >= 8.5 ? "green" : "red" };

  let [show, setShow] = useState(true);

  const navigate = useNavigate();

  return (
    <Card className=" movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <CardContent>
        <div className="movie-specs">
          <h2 className="movie-name">
            {movie.name}
            <IconButton
              aria-label="toggle"
              color="primary"
              onClick={() => setShow(!show)}
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              aria-label="toggle"
              color="primary"
              onClick={() => navigate(`/movies/${id}`)}
            >
              <InfoIcon />
            </IconButton>
          </h2>
          <p className="movie-rating" style={ratingstyle}>
            ⭐{movie.rating}
          </p>
        </div>

        {show ? <p className="movie-summary">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        <Counter /> {editButton} {deleteButton}
      </CardActions>
    </Card>
  );
}
