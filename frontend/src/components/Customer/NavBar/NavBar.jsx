const NavBar = props => (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-4">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">QUICK LINKS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/registersupplier">Supplier</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Customer
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/Shedules/Services">Service Schedule</a></li>
                    <li><a className="dropdown-item" href="/GMap">Vehicle Assistance</a></li>
                    <li><a className="dropdown-item" href="/Cus_details/details">Customer details</a></li>
                    <li><a className="dropdown-item" href="/Shedule_details/S_details">Shedules details</a></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><a className="dropdown-item" href="#">Spare-Parts</a></li>
                    {/* <li><hr className="dropdown-divider"></hr></li> */}
                    {/* <li><a className="dropdown-item" href="#">Spare-Parts</a></li> */}
                </ul>
                </li>

                <li className="nav-item">
                <a className="nav-link" href="/SpareParts">Spare-Parts</a>
                </li>

                {/* <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li> */}
            </ul>
            
            </div>
        </div>
        </nav>
);
export default NavBar;