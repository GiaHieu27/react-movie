import { useParams } from "react-router-dom";
// config
import { POSTER_SIZE, IMAGE_BASE_URL } from "../config";

// component
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";

// hook
import { useMovieFetch } from "../hooks/useMovieFetch";
// image
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) <Spinner />;
  if (error) <div>Something went wrong</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actor">
        {movie.actors ? (
          movie.actors.map((actor) => (
            <Actor
              key={actor.cast_id}
              imageUrl={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                  : NoImage
              }
              name={actor.name}
              character={actor.character}
            />
          ))
        ) : (
          <Spinner />
        )}
      </Grid>
    </>
  );
};

export default Movie;
