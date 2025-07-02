import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-200 p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xl font-bold text-blue-700">Bece Art</div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Link to="/" className="text-blue-600 hover:underline">Inicio</Link>
          <Link to="/about" className="text-blue-600 hover:underline">Acerca de</Link>
          <Link to="/contact" className="text-blue-600 hover:underline">Contacto</Link>
          <Link to="/myworks" className="text-blue-600 hover:underline">Mis Trabajos</Link>

        </div>
      </div>
    </nav>
  );
}
