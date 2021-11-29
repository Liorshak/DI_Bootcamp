import { connect } from "react-redux";
import { showMovie } from "../actions/actions";

const MovieList = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingRight: "3vw",
      }}
    >
      <h2>Movie List</h2>
      {props.moviesArr.map((movie, i) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {movie.title}
            <button id={i} onClick={props.showMovie}>
              details
            </button>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    moviesArr: state.moviesArr,
    movie: state.movie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showMovie: (e) => dispatch(showMovie(e.target.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
