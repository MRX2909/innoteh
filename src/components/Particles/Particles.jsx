const Particles = () => {
  return (
    <>
      <div className="background">
        <div id="particles-js"></div>
      </div>
      <div className="agent-promo text-white">
        <div className="start-block-left">
          <img src="/src/assets/img/new-images/stars.svg" alt="" draggable="false" />
          <div className="star-name-block star-gacrux">
            <span className="span__star-name">BILIM</span>
            <span className="span__star-coordinate">[−57° 06′ 47.5684″]</span>
          </div>
          <div className="star-name-block star-imai">
            <span className="span__star-name">YLYM</span>
            <span className="span__star-coordinate">[–58° 44′ 56.1369″]</span>
          </div>
          <div className="star-name-block star-acrux">
            <span className="span__star-name">ÖSÜŞ</span>
            <span className="span__star-coordinate">[−63° 05′ 56.7343″]</span>
          </div>
          <div className="star-name-block star-mimosa">
            <span className="span__star-name">NETIJE</span>
            <span className="span__star-coordinate">[–59° 41′ 19.5792″]</span>
          </div>
        </div>
        <div className="big-tittle">
          <h1 className="display-3 fw-bold">
            Sanly Binýat
            <br />{" "}
            <span className="display-6">elmydama, siziň bilen!</span>
          </h1>
        </div>
        <div className="scroll-down-block">
          <button className="scroll-down">
            <h5>Kiberhowpsuzlygy üpjün etmegiň esasy wezipeleri:</h5>
          </button>
        </div>
      </div>
    </>
  );
};

export default Particles;
