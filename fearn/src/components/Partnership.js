import socar from '../img/socar.png';
import aytemiz from '../img/aytemiz.png';
import opet from '../img/opet.png';
import lukoil from '../img/lukoil.png';
import total from '../img/total.png';
import bp from '../img/bp.png';
import petrol from '../img/petrol.png';
export const Partnership = () => {
  return (
    <div className="partnerships-container text-center p-4">
      <div className="container">
        <h2 className="partnerships-title">Partnerships</h2>
        <p className="partnerships-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel.
        </p>
        <div className="partnerships-card-container text-center">
          <img
            className="col-lg-3 partnerships-img my-4"
            src={socar}
            alt="socar"
          />
          <img
            className="col-lg-3 partnerships-img my-4"
            src={aytemiz}
            alt="aytemiz"
          />
          <img className="col-lg-3 partnerships-img my-4" src={bp} alt="bp" />
          <img
            className="col-lg-3 partnerships-img my-4"
            src={opet}
            alt="opet"
          />
          <img
            className="col-lg-3 partnerships-img my-4"
            src={lukoil}
            alt="lukoil"
          />
          <img
            className="col-lg-3 partnerships-img my-4"
            src={total}
            alt="total"
          />
          <img
            className="col-lg-3 partnerships-img my-4"
            src={petrol}
            alt="petrol"
          />
        </div>
        <p className="partnerships-second-text">
          Fearn Token müşterilerinize dijital varlık, sizlere ise daha fazla
          müşteri kazanrır!
        </p>
        <button className="hero-button joinus">
          <span>Bize Katılın</span>
          <i className="fa-solid fa-angle-right ml-2"></i>
        </button>
      </div>
    </div>
  );
};
