import { Link, Outlet } from "react-router-dom";

export function Header() {
  return (
    <div>
      <Link to="/muzyka">Przejdź na strone z muzyką</Link><br />
      <Link to="/gry">Przejdź na strone z grami</Link>

      <Outlet />
    </div>
  );
}
