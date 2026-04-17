import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-[#1A1953] text-white flex flex-col">

      <NavBar />

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default Layout;