function Karves({ karves, ateKarvute, avys }) {
  return (
    <>
      {karves.map((karve, i) => (
        <div className="kaire">
          <div
            onClick={() => ateKarvute(karve, i)}
            className={karve.includes("K") ? "karves" : "avys"}
            key={i}
          >
            {karve}
          </div>
        </div>
      ))}
    </>
  );
}
export default Karves;
