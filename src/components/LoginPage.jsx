import { Link } from "react-router-dom";
export const LoginPage = () => {
  return (
    <div className="container d-flex justify-content-center min-vh-100 align-items-center">
      <div className="card border p-5">
        <form>
          <h3 className="text-center mb-4">Inicia Sesion</h3>
          <div className="mb-3">
            <input type="text" className="form-control" id="DNI-input" placeholder="Cedula"/>
          </div>
          <div className="mb-3">

            <input
              type="password"
              className="form-control"
              id="password-input"
              placeholder="Contraseña"
            />
          </div>

          <Link to="/#" className="">Olvide mi contraseña</Link>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Acceder
          </button>

          <p className="mt-3">No tienes cuenta? <Link to="/signup" className="">Registrate aquí</Link></p>
          

        </form>
      </div>
    </div>
  );
};
