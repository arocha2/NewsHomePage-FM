import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";

export const HomePage = () => {
  return (
    <main className="w-[100vw]  max-w-[1440px] m-auto overflow-hidden ">
      <NavBar />
      <Header />
    </main>
  );
};
