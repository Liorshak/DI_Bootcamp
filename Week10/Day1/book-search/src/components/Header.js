import { connect } from "react-redux";
import { Navbar, Container } from "react-bootstrap";
import { getBooksList, getValue, getSearchTerms } from "../actions";
const Header = ({ getBooksList, getValue, getSearchTerms }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Navbar bg="dark" variant="dark" style={{ width: "100vw" }}>
        <Container>
          <Navbar.Brand style={{ margin: "5px auto" }}>
            Book finder app
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div style={{ margin: "10px" }}>
        <input
          type="text"
          onChange={(event) => {
            getSearchTerms(event);
            getBooksList();
          }}
        />{" "}
        <select
          name="Sort By"
          onChange={(event) => {
            getValue(event);
            getBooksList();
          }}
        >
          <option value="NEWEST">Newest First</option>
          <option value="RELEVANCE">Relevance</option>
          <option value="NONE" selected>
            none
          </option>
        </select>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBooksList: () => dispatch(getBooksList()),
    getValue: (event) => dispatch(getValue(event.target.value)),
    getSearchTerms: (event) => dispatch(getSearchTerms(event.target.value)),
  };
};

export default connect(null, mapDispatchToProps)(Header);
