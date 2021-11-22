const SearchBar = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder="search your robot"
        onChange={props.onSearch}
      />
    </>
  );
};

export default SearchBar;
