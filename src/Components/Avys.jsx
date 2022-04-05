function Avys({ avys, ateAvyte, karves }) {
  return (
    <>
      {avys.map((avis, i) => (
        <div className="desine">
          <div
            onClick={() => ateAvyte(avis, i)}
            className={avis.includes("A") ? "avys" : "karves"}
            key={i}
          >
            {avis}
          </div>
        </div>
      ))}
    </>
  );
}

export default Avys;
