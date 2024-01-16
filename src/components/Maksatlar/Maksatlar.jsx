const Maksatlar = () => {
  return (
    <>
      <>
        <div
          id="our-advantages"
          className="our-advantages_outer menu-projection"
        >
          <div className="" style={{ position: "relative" }}>
            <div className="background-planet">
              <img
                className="desktop"
                src="/src/assets/img/agent/unknown-planet-notele.png"
                srcSet="img/agent/unknown-planet-notele2x.png 2x"
                alt=""
              />
              <img
                id="telescopeid"
                className="telescope"
                src="/src/assets/img/agent/tele.png"
                srcSet="img/agent/tele2x.png 2x"
                alt=""
              />
              <img
                className="mobile"
                src="/src/assets/img/agent/min-unknown-planet.png"
                srcSet="img/agent/min-unknown-planet2x.png 2x"
                alt=""
              />
            </div>
            <div className="container_inner">
              <div className="container_correction-bound">
                <div className="tittle title-container">
                  <span>Biziň öňümizde goýýan maksatlarymyz:</span>
                </div>
                <div className="advantages-collection">
                  <div className="advantage-item">
                    <div className="advantage_img_outer">
                      <img
                        className=""
                        src="/src/assets/img/agent/ad-galaxy.png"
                        srcSet="img/agent/ad-galaxy2x.png 2x"
                        alt=""
                      />
                    </div>
                    <div className="advantage-text">
                      Ähli maglumatlaryň ygtybarlylygyny iň ýokary <br />
                      kämil derejede üpjün edilmegi.
                    </div>
                  </div>
                  <div className="advantage-item">
                    <div className="advantage_img_outer">
                      <img
                        className=""
                        src="/src/assets/img/agent/ad-robot.png"
                        srcSet="./img/agent/ad-robot2x.png 2x"
                        alt=""
                      />
                    </div>
                    <div className="advantage-text">
                      Iş amallary awtomatlaşdyrmak <br /> üçin emeli intellektiň
                      ulanylmagy.
                    </div>
                  </div>
                  <div className="advantage-item">
                    <div className="advantage_img_outer">
                      <img
                        className=""
                        src="/src/assets/img/agent/ad-vr.png"
                        srcSet="img/agent/ad-vr2x.png 2x"
                        alt=""
                      />
                    </div>
                    <div className="advantage-text">
                      Web programmirleme boýunça <br /> ýokary netijeli tejribe.
                    </div>
                  </div>
                  <div className="advantage-item">
                    <div className="advantage_img_outer">
                      <img
                        className=""
                        src="/src/assets/img/agent/ad-aster.png"
                        srcSet="img/agent/ad-aster2x.png 2x"
                        alt=""
                      />
                    </div>
                    <div className="advantage-text">
                      Maglumat ulgamlaryny ýokary derejede <br />{" "}
                      kiberhowplardan goramak.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="box-solutions" className="box-solutions_outer">
          <div className="landscape">
            <img
              className="landscpae-img"
              src="/src/assets/img/agent/landscape.png"
              alt=""
            />
          </div>
        </div>
      </>
    </>
  );
};

export default Maksatlar;
