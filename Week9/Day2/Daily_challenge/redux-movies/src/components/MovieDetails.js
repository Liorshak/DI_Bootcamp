import { connect } from "react-redux";

const MovieDetails = (props) => {
  if (props.movie != "") {
    return (
      <div>
        <h2> Movie detail</h2>
        <p>Title: {props.movie.title}</p>
        <p>Release Date: {props.movie.releaseDate}</p>
        <p>Rating: {props.movie.rating}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2> Movie detail</h2>
        <p> Please Choose a movie</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
  };
};

export default connect(mapStateToProps)(MovieDetails);
