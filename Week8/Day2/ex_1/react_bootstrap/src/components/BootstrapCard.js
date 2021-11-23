const BootstrapCard = (promps) => {
  const { info } = promps;
  return (
    <div className="card m-5" style={{ width: "30rem" }}>
      <img className="card-img-top" src={info.imageUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{info.title}</h5>
        <p className="card-text">{info.description}</p>
        <a href={info.buttonUrl} className="btn btn-primary">
          {info.buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default BootstrapCard;
