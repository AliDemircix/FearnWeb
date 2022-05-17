import logo from '../img/logo.png';
export const Footer = () => {
  return (
    <footer>
      <div className="footer-item-wrapper d-flex justify-content-around align-items-center">
        <div className="footer-item-left col-lg-4">
          <img className="footer-logo" src={logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse.
          </p>
        </div>

        <div className="footer-item-middle col-lg-4">
          <h2>Destek</h2>
          <ul className="mt-2 p-3">
            <li>
              <span>lorem ipsum</span>
            </li>
            <li>
              <span>lorem ipsum</span>
            </li>
            <li>
              <span>lorem ipsum</span>
            </li>
            <li>
              <span>lorem ipsum</span>
            </li>
            <li>
              <span>lorem ipsum</span>
            </li>
          </ul>
        </div>
        <div className="footer-item-right">
          <h2>Iletisim</h2>
          <div>
            <i className="fa-solid fa-envelope-open footer-social mr-2"></i>{' '}
            e-mail
          </div>
          <div>
            <i className="fa-brands fa-twitter footer-social mr-2"></i> twitter
          </div>
          <div>
            <i className="fa-brands fa-instagram footer-social mr-2"></i>{' '}
            instagram
          </div>
        </div>
      </div>
    </footer>
  );
};
