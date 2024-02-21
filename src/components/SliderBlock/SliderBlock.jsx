const SliderBlock = () => {
  return (
    <div className="tabs-wrapper tabs-wrapper--main">
      <div className="tabs-overflow-hidden container container--tabs-main">
        <div className="tabs-clients">
          <div id={0} className="tab-client-item">
            Emeli aň
          </div>
          <div id={1} className="tab-client-item">
            Kiberhowpsuzlyk
          </div>
          <div id={2} className="tab-client-item">
            Web programma üpjünçiligi
          </div>
        </div>
      </div>
      <div
        className="tab-content tab-content-main"
        style={{ left: 0, display: "flex", flexDirection: "row" }}
      >
        <div className="tab-item tab-item-main">
          <div className="tab-item__left-main">
            <p className="tab-item__title tab-item__title-main">
              Emeli aň
            </p>
            <p className="tab-item__description tab-item__description-main">
              Emeli intellekt - bu intellektual kompýuter ulgamlarynyň, ýagny
              adatça adam aňy bilen baglanyşdyrýan mümkinçiliklerimiz bolan dil
              bilimini, öwrenmäge, pikirlenmek ukybyna eýe bolan kompýuter
              ylymlarynyň bir pudagydyr.
            </p>
            <a
              href="artificial_intelligence.php"
              className="publication-item__link-to-post tab-button_more-about"
            >
              Bu barada giňişleýin
            </a>
          </div>
          <div className="tab-item__right-wrapper tab-item__right-wrapper--main">
            <img
              src="./src/assets//img/new-images/cases/robot2.svg"
              alt="Artificial intelligence"
              className="tab-item__right-wrapper_image tab-item__image"
            />
          </div>
        </div>
        <div className="tab-item tab-item-main">
          <div className="tab-item__left-main">
            <p className="tab-item__title tab-item__title-main">
              Kiberhowpsuzlyk
            </p>
            <p className="tab-item__description tab-item__description-main">
              Kiberhowpsuzlyk (käwagt kompýuter howpsuzlygy diýilýär)
              kompýuterleri, serwerleri, ykjam enjamlary, elektron ulgamlary,
              torlary we maglumatlary zyýanly hüjümlerden goramak üçin usullaryň
              we tejribeleriň ýygyndysydyr. Kiberhowpsuzlyk kibergiňişlikde
              goragyň üpjünçiligine ugrukdyrylan bolmaly. Şonuň üçin hem
              kiberhowpsuzlyk meselesiniň esasy düşünjesi{" "}
              <strong>kibergiňişlik</strong> düşünjesi bolup durýar.
            </p>
            <a
              href="cyber_security.php"
              className="publication-item__link-to-post tab-button_more-about background-orange"
            >
              Bu barada giňişleýin
            </a>
          </div>
          <div className="tab-item__right-wrapper tab-item__right-wrapper--main">
            <img
              src="./src/assets//img/new-images/cases/game2.svg"
              alt="Cyber security"
              className="tab-item__right-wrapper_image tab-item__image tab-item__image--game"
            />
          </div>
        </div>
        <div className="tab-item tab-item-main">
          <div className="tab-item__left-main">
            <p className="tab-item__title tab-item__title-main">
              Web programma üpjünçiligi
            </p>
            <p className="tab-item__description tab-item__description-main">
              Web programma üpjünçiligi - bu web sahypalaryny döretmegi, gurmagy
              we goldamagy aňladýar. Web dizaýny, web programmirlemek we
              maglumat bazasyny dolandyrmak ýaly taraplary öz içine alýar.
              Internetde, ýagny web sahypalarynda işleýän programmanyň
              döredilmegi.
            </p>
            <a
              href="#"
              className="publication-item__link-to-post tab-button_more-about tab-item-mobile__link--blue"
            >
              Bu barada giňişleýin
            </a>
          </div>
          <div className="tab-item__right-wrapper tab-item__right-wrapper--main">
            <img
              src="./src/assets//img/new-images/cases/rocket2.svg"
              alt="web/app development"
              className="tab-item__right-wrapper_image tab-item__image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderBlock;
