import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar-outer-div">
      <div className="nav-left">
        <div className="nav-content">
        <h3>Logo</h3>
        </div>
          
        <input type="text" placeholder="Search" />
      </div>

      <div className="nav-right">
      <div className="nav-content">


        <h3>
          Hello <br /> username
        </h3>
      </div>
        <box-icon type="solid" name="cart"></box-icon>
        <box-icon type='solid' name='user'></box-icon>
        <div className="nav-content">
          <h3>
            delivery <br />
             address
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Navbar;








