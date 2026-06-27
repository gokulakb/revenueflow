import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-semibold tracking-tight text-white">RevenueFlow</Link>
        <nav className="flex items-center gap-3 text-sm text-slate-300 sm:gap-6">
          <NavLink to="/" className={({ isActive }) => `transition ${isActive ? 'text-sky-400' : 'hover:text-white'}`}>
            Home
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => `transition ${isActive ? 'text-sky-400' : 'hover:text-white'}`}>
            Dashboard
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
