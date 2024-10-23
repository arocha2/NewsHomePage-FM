import imgDesktop from "../assets/images/image-web-3-desktop.jpg";
import imgMobile from "../assets/images/image-web-3-mobile.jpg";

const news = [
  {
    id: 1,
    tittle: "Hydrogen VS Electric Cars",
    desc: "Will hydrogen-fueled cars ever catch up toEVs?",
  },
  {
    id: 2,
    tittle: "The Downsides od AI Artistry",
    desc: "What are the possible adverse effects of on*demand AI image generation?",
  },
  {
    id: 3,
    tittle: "Is VC Funding Drying Up?",
    desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means?",
  },
];

export const Header = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 px-6 gap-4">
      <div className=" md:col-span-2 ">
        <img
          src={imgDesktop}
          alt="img-desktop"
          className="hidden sm:block w-full"
        />
        <img
          src={imgMobile}
          alt="img-desktop"
          className="block w-full sm:hidden"
        />
      </div>
      <div className=" p-4  bg-Very-dark-blue  md:row-span-2 row-start-4 ">
        <p className="font-inter-regular font-bold text-Soft-orange text-3xl md:text-[2.5em]">
          New
        </p>
        <div className="flex flex-col flex-grow-0 divide-y divide-gray-50/30 h-full">
          {news.map(({ id, tittle, desc }) => (
            <div
              className="py-6 h-full flex flex-col justify-center  "
              key={id}
            >
              <p className="text-Off-white font-bold md:text-[1.5em] ">
                {tittle}
              </p>
              <p className="text-Grayish-blue text-sm tracking-wide mt-1 md:-text-[1.2em]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="  text-[2.4em] md:text-[3.3em] w-[90%] leading-10 md:leading-[1em] tracking-wide font-inter-extrabold ">
        <p>The Bright Future of Web 3.0? </p>
      </div>
      <div className=" leading-6 tracking-wide text-sm md:p-4 md:text-lg  text-Very-dark-blue">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="px-7 py-3 my-6 font-extrabold text-Very-dark-blue text-xs tracking-[.3em] bg-Soft-red hover:bg-Dark-grayish-blue hover:text-Off-white hover:cursor-pointer">
          READ MORE
        </button>
      </div>
    </section>
  );
};
