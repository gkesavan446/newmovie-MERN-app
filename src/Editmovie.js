import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from './global';
export function Editmovie() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`${API}/${id}`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }, [])

    return (
        <div>
            {movie ? <Editmovieform movie={movie} /> : " Loading..."}
        </div>
    )
}

function Editmovieform({ movie }) {

    const addMovieValidataionSchema = yup.object({
        name: yup
            .string()
            // .min(8, "Please provide a correct email")
            .required("Need a Name"),
        poster: yup
            .string()
            .url()
            .min(4, "Need a Correct poster link")
            .required("Need a poster link"),
        rating: yup
            .number()
            .min(0)
            .required("Need a rating"),
        summary: yup
            .string()
            .min(20, "Need a bigger summary")
            .required("Need a summary"),
        trailer: yup
            .string()
            .min(4, "Please provide a correct trailer link")
            .required("Need a trailer link")
            .url(),
    })

    const formik = useFormik({
        initialValues: {
            name: movie.name,
            poster: movie.poster,
            rating: movie.rating,
            summary: movie.summary,
            trailer: movie.trailer
        },
        validationSchema: addMovieValidataionSchema,
        onSubmit: (updatedMovie) => {
            console.log("Formik values:", updatedMovie);
            editMovie(updatedMovie)
        },
    });

    console.log("Movie kulla iruka data", movie)

    // const updatedMovie = {
    //     name: name,
    //     poster: poster,
    //     rating: rating,
    //     summary: summary,
    //     trailer: trailer,
    // }

    // console.log(updatedMovie)
    const navigate = useNavigate();
    const editMovie = (updatedMovie) => {
        fetch(`${API}/${movie.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedMovie),
            headers: { "Content-type": "application/json" },
        }).then((data) => navigate("/movies"));
    };

    return (
        <form className="add-movie-form" onSubmit={formik.handleSubmit}>
            <TextField
                value={formik.values.name}
                name="name"
                id="outlined-basic"
                label="Movie Name"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.name}
                helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null}
            />

            <TextField

                value={formik.values.poster}
                name="poster"
                id="outlined-basic"
                label="Poster Link"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.poster && formik.errors.poster}
                helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster : null}
            />

            <TextField

                value={formik.values.rating}
                name="rating"
                id="outlined-basic"
                label="Rating"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.rating && formik.errors.rating}
                helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : null}
            />

            <TextField

                value={formik.values.summary}
                name="summary"
                id="outlined-basic"
                label="Summary"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.summary && formik.errors.summary}
                helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary : null}
            />

            <TextField

                value={formik.values.trailer}
                name="trailer"
                id="outlined-basic"
                label="Trailer"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.trailer && formik.errors.trailer}
                helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : null}
            />

            <Button type="submit" variant="contained" color="success" >
                Save
            </Button>
        </form>
    );
}

// onClick={() => addMovie()}