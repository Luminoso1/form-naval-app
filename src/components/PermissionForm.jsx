
export const PermissionForm = () => {
  return (
    <div className="container-fluid d-flex  justify-content-center align-items-center  min-vh-100">
      <div className="card col-md-8 border-0">
      <div className="row">
        
        <div className="col">
          <h3 className="text-end mb-4">Solicitar Permiso</h3>
          <form className="row g-3 needs-validation d-flex justify-content-end" noValidate>
            <div className="col-md-4">
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
                disabled
              />
            </div>

            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                placeholder="Guardia"
                required
                disabled
              />
            </div>

            <div className="col-md-3">
              <input
                type="date"
                id="start"
                className="form-control"
                name="trip-start"
                value={"2023-01-01"}
                min="2020-01-01"
                max="2030-01-01"
                required
                disabled
              />
            </div>

            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                placeholder="Grado"
                required
                disabled
              />
            </div>

            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                placeholder="Departamento"
                required
                disabled
              />
            </div>

            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                placeholder="Division"
                required
                disabled
              />
            </div>

            <div className="col-md-5">
              <input
                type="tel"
                className="form-control"
                id="validationCustom03"
                placeholder="Telefono"
                required
                disabled
              />
            </div>

            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                placeholder="Lugar"
                required
                
              />
            </div>

            <div className="col-md-5">
              <textarea className="form-control" placeholder="Asunto"></textarea>
            </div>

            <div className="col-md-5">
              <textarea className="form-control" placeholder="Odjeto"></textarea>
            </div>

            

            <div className="col-md-3">
              <label htmlFor="" className="Fecha Inicio">Fecha Inicio</label>
              <input
                type="date"
                id="start"
                className="form-control"
                name="trip-start"
                placeholder="1"
                min="2020-01-01"
                max="2030-01-01"
                required
                
              />
            </div>

            <div className="col-md-3">
              <label htmlFor="" className="Fecha Inicio">Fecha Fin</label>
              <input
                type="date"
                id="start"
                className="form-control"
                name="trip-start"
                placeholder="1"
                min="2020-01-01"
                max="2030-01-01"
                required
                
              />
            </div>

            <div className="col-12 d-flex justify-content-end mt-5">
              <button className="btn btn-primary submit" type="submit">
                Enviar Solicitud
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};
