export const RegistrationForm = () => {
  return (
    <div className="container-fluid  d-flex justify-content-center align-items-center min-vh-100">
      <div className="card w-50 border-1 p-4">
        <h1 className="text-center">Registrate</h1>
        <form className="row g-3 needs-validation mt-1" noValidate>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              placeholder="Cedula"
              required
            />
            <div className="valid-feedback">Ingresa tu cedula</div>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              placeholder="Nombre completo"
              required
            />
            <div className="valid-feedback">Ingresa tu nombre completo</div>
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              placeholder="Guardia"
              required
            />
            <div className="invalid-feedback">Ingresa un valor</div>
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              placeholder="Departamento"
              required
            />
            <div className="invalid-feedback">Ingresa un valor</div>
          </div>

          <div className="col-md-6">
            <input
              type="tel"
              className="form-control"
              id="validationCustom03"
              placeholder="Celular"
              required
            />
            <div className="invalid-feedback">Ingresa un celular</div>
          </div>

          <div className="col-md-6">
            <input
              type="password"
              className="form-control"
              id="validationCustom03"
              placeholder="Contraseña"
              required
            />
            <div className="invalid-feedback">Ingresa una contraseña.</div>
          </div>

          <div className="col-12">
            <button className="btn btn-primary submit" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
