const NewBook = ({
  getTitle,
  getAuthor,
  getGenre,
  getYearPub,
  sendData,
  notice,
}) => {
  return (
    <div>
      <form onSubmit={sendData}>
        <h1>New Book</h1>
        {notice ? <h3>data sent!</h3> : <span></span>}
        Title <input type="text" onChange={getTitle} /> <br />
        Author <input type="text" onChange={getAuthor} /> <br />
        Genre <input type="text" onChange={getGenre} /> <br />
        YearPublished <input type="number" onChange={getYearPub} /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewBook;
