import imgGaming from "../assets/images/image-gaming-growth.jpg";
import imgRetro from "../assets/images/image-retro-pcs.jpg";
import imgTop from "../assets/images/image-top-laptops.jpg";

const cards = [
  {
    id: "01",
    img: imgRetro,
    tittle: "Reviving Retro PCs",
    desc: "What happens when old PCs are given modern upgrades",
  },
  {
    id: "02",
    img: imgTop,
    tittle: "Top 10 Laptops of 2022",
    desc: "Our best picks for various needs and budgets",
  },
  {
    id: "03",
    img: imgGaming,
    tittle: "The Growth of Gaming",
    desc: "How the pandemic has sparked fresh opportunities",
  },
];

export const Cards = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 ">
      {cards.map(({ id, img, tittle, desc }) => (
        <div className="grid grid-cols-3 h-full" key={id}>
          <div className="col-span-1 h-full">
            <img src={img} alt={`${img}`} />
          </div>
          <div className="col-span-2 flex flex-col h-full pl-4 ">
            <p className="flex h-full text-[2em] font-inter-extrabold text-Soft-red p-0">
              {id}
            </p>
            <p className="hover:text-Soft-red hover:cursor-pointer flex h-full items-center font-inter-extrabold  text-lg">
              {tittle}
            </p>
            <p className="flex h-full text-sm text-zinc-500">{desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
