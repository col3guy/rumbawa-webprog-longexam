import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-[#1A1953] bg-[#F8DE22] px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-[#1A1953] sm:flex-row sm:items-center sm:justify-between">

        {/* Main clickable title */}
        <button
          onClick={() => navigate('/products')}
          className="text-base font-bold text-left hover:underline transition cursor-pointer"
        >
          BulldogEx Shop
        </button>

        {/* Clickable tagline with separators restored */}
        <button
          onClick={() => navigate('/products')}
          className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#1A1953]/80 hover:text-[#1A1953] transition cursor-pointer"
        >
          Campus essentials • Products • Pickup
        </button>

        <p className="text-xs text-[#1A1953]/70 sm:text-right">
          © {new Date().getFullYear()}
        </p>

      </div>
    </footer>
  );
};

export default Footer;