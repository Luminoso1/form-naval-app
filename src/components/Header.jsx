import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg bg-body-tertiary  rounded border">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            App 
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="solicitar-permiso">
                  Solicitar permisos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="lista-permisos">
                  Ver permisos
                </Link>
              </li>
            </ul>
            <Link to="signin">
              <button className="btn btn-primary ">Iniciar sesión</button>
            </Link>

            <Link to="signup">
              <button className="btn btn-success mx-4">Registarse</button>
            </Link>

          </div>
        </div>
      </nav>
    </div>
  );
}

export const HeaderUser = () => {
  return (
    <div>
      
    </div>
  );
}

export const HeaderAdmin = () => {
  return (
    <div>

    </div>
  );
}