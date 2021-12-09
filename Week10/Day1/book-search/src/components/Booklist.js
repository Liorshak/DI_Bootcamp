import { connect } from "react-redux";
import Bookcard from "./Bookcard";

const Booklist = ({ bookArr, searchTxt }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {bookArr == undefined || searchTxt == ""
        ? "Please search a book"
        : bookArr.map((book) => {
            return <Bookcard book={book} />;
          })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookArr: state.bookArr,
    searchTxt: state.searchTxt,
  };
};

export default connect(mapStateToProps)(Booklist);
