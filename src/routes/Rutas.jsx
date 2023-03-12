import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../components/LoginPage";
import { RegistrationForm } from "../components/RegistrationForm";
import { PermissionForm } from "../components/PermissionForm";
import { Header } from "../components/Header";
import { PermisionList } from "../components/PersmissionList";

export const Rutas = () => {
  return (
    <Routes>
      <Route path="form-naval-app/build/" element={<Header />}></Route>
      <Route path="form-naval-app/build/signin" element={<LoginPage />}></Route>
      <Route path="form-naval-app/build/signup" element={<RegistrationForm />}></Route>
      <Route path="form-naval-app/build/lista-permisos" element={<PermisionList />}></Route>
      <Route path="form-naval-app/build/solicitar-permiso" element={<PermissionForm />}></Route>
    </Routes>
  );
};
