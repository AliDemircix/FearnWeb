import logo from '../img/logo.png';

const Header = () => {
  return (
    <header>
      <div className="container-fluid header-wrapper d-flex">
        <img className="header-logo" src={logo} alt="logo" />
        <p className="header-divider mr-4"></p>
        <nav className="col-lg-8 align-items-center d-flex">
          <ul className="nav-menu-wrapper d-flex justify-content-between col-lg-12 ml-4">
            <li className="nav-item">
              <a href="">About Us</a>
            </li>
            <li className="nav-item">
              <a href="">PartnerShip</a>
            </li>
            <li className="nav-item">
              <a href="">Tokenomics</a>
            </li>
            <li className="nav-item">
              <a href="">Roodmap</a>
            </li>
            <li className="nav-item">
              <a href="">Team</a>
            </li>
            <li className="nav-item">
              <a href="">Faq</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
