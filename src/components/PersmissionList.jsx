export const PermisionList = () => {
  const style1 = {
    color: "red"
  }
  return (
    <div className="container">
      <table className="table table-striped table-hover table-bordered mt-5 ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Cedula</th>
            <th scope="col">Nombres</th>
            <th scope="col">Fecha</th>
            <th scope="col">Lugar</th>
            <th scope="col">Inicio</th>
            <th scope="col">Fin</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>1042245234</td>
            <td>Jon Doe</td>
            <td>01-04-2023</td>
            <td>B/quilla</td>
            <td>05-04-2023</td>
            <td>09-04-2023</td>
            <td style={style1}>Pendiente</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};
