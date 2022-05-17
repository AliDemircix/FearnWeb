export const HeroTop = () => {
  return (
    <>
      <div className="hero-container d-flex">
        <div className="hero-wrapper col-lg-6">
          <p className="hero-s-title">Lorem ipsum dolor sit amet</p>
          <h1 className="hero-title">
            Lorem ipsum dolor <span>&</span> consectetur adipiscing elit.
          </h1>
          <p className="hero-description col-lg-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Vivamus vel dictum ex
          </p>
          <div className="hero-button-wrapper col-lg-6 d-flex justify-content-between">
            <button className="hero-button whitepaper">
              <span> Whitepaper</span>
              <i className="fa-solid fa-angle-right ml-2"></i>
            </button>
            <button className="hero-button buy-fearn">
              <span>Buy $ Fearn</span>{' '}
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className="hand col-lg-6"></div>
      </div>
      <div className="hero-footer"></div>
    </>
  );
};
