const Jumotron = (promps) => {
  console.log(promps);
  const { info } = promps;
  console.log(info);
  //   return <h1>Hello</h1>;
  return (
    <div className="p-5 bg-light">
      <h1 className="mb-3">{info.title}</h1>
      <h4 className="mb-3">{info.description}</h4>
      <a className="btn btn-primary" href={info.buttonURL} role="button">
        {info.buttonLabel}
      </a>
    </div>
  );
};

export default Jumotron;
