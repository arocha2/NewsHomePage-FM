import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";

export const HomePage = () => {
  return (
    <main className="w-[100vw]  max-w-[1440px] m-auto overflow-hidden font-inter-regular bg-Off-white ">
      <NavBar />
      <Header />
      <Cards />
    </main>
  );
};
