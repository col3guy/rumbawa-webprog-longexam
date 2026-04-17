import { Outlet } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const AuthLayout = () => {
  return (
    /* OUTER WHITE BACKGROUND */
<section className="min-h-screen bg-[#1A1953] flex items-center justify-center p-4 sm:p-6 lg:p-10">

      {/* FLOATING APP CONTAINER */}
<div className="w-full max-w-7xl min-h-[90vh] grid lg:grid-cols-[1fr_1fr] overflow-hidden rounded-3xl border-2 border-[#F8DE22] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]">        
        {/* LEFT: Branding */}
        <div className="relative hidden lg:flex items-center justify-center bg-zinc-900 overflow-hidden">
          
          {/* Background logo */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.12,
            }}
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-zinc-800" />

          {/* Content */}
          <div className="relative z-10 max-w-md text-center px-8">
            <img
              src={logo}
              alt="Logo"
              className="mx-auto mb-6 w-28 h-28 object-contain"
            />

            <h1 className="text-3xl font-semibold text-white">
              Welcome to NU Exchange
            </h1>

            <p className="mt-3 text-sm text-zinc-300">
              Securely access your account and manage your transactions with ease.
            </p>
          </div>
        </div>

        {/* RIGHT: Form side */}
        <div className="flex items-center justify-center bg-zinc-50 px-6 py-10 sm:px-10 lg:px-16">
          
          <div className="w-full max-w-md">
            
            {/* Mobile logo */}
            <div className="mb-8 flex flex-col items-center lg:hidden">
              <img
                src={logo}
                alt="Logo"
                className="w-20 h-20 object-contain mb-3"
              />
              <h1 className="text-xl font-semibold">NUBD Exchange</h1>
            </div>

            <Outlet />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AuthLayout;