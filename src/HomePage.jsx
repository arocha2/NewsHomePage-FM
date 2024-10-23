import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";

export const HomePage = () => {
  return (
    <main className="bg-Off-white ">
      <section className="w-[100vw]  max-w-[1240px] m-auto overflow-hidden font-inter-regular ">
        <NavBar />
        <Header />
        <Cards />
      </section>
    </main>
  );
};
