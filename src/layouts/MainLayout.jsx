import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <main className="w-full h-screen flex justify-center">
      <div className="w-[90%] lg:w-contain flex flex-col">
        <Header />
        <div className="w-full flex-1 main_bg rounded-tr-xl rounded-tl-xl">
          <Nav />
          <Outlet />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
