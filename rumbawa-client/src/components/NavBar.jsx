import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

// CENTER NAV LINKS
const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'bg-[#1A1953] text-[#F8DE22] border-2 border-[#1A1953]'
      : 'text-[#1A1953] hover:bg-[#1A1953] hover:text-[#F8DE22] border-2 border-transparent',
  ].join(' ');

// AUTH BUTTONS (RIGHT SIDE)
const authLinkClassName = ({ isActive }) =>
  [
    'rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition border-2',
    isActive
      ? 'bg-[#1A1953] text-[#F8DE22] border-[#1A1953]'
      : 'text-[#1A1953] border-transparent hover:bg-[#1A1953] hover:text-[#F8DE22]',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#F8DE22]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* LEFT - LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="BulldogEx"
            className="h-9 w-9 rounded-full bg-white object-contain"
          />
          <p className="text-xl font-bold text-[#1A1953]">
            BulldogEx Shop
          </p>
        </NavLink>

        {/* CENTER - NAV LINKS */}
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT - AUTH BUTTONS */}
        <div className="flex items-center gap-2">
          <NavLink to="/auth/signin" className={authLinkClassName}>
            Log In
          </NavLink>

          <NavLink to="/auth/signup" className={authLinkClassName}>
            Sign Up
          </NavLink>
        </div>

      </div>
    </header>
  );
};

export default NavBar;