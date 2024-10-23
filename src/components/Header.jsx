import imgDesktop from "../assets/images/image-web-3-desktop.jpg";
import imgMobile from "../assets/images/image-web-3-mobile.jpg";

export const Header = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 px-6">
      <div className=" md:col-span-2 border border-red-600">
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
      <div className="border md:row-span-2 row-start-4 border-red-600">2</div>
      <div className="border border-red-600">3</div>
      <div className="border border-red-600">4</div>
    </section>
  );
};
