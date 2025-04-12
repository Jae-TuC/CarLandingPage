import { BsSpeedometer2 } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { GiGasPump } from "react-icons/gi";
import { CgShoppingBag } from "react-icons/cg";
import brand1 from "../../assets/brand1.png";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({});

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div
          className="embla__container mt-14 flex w-full snap-x items-center gap-12 overflow-x-auto overflow-y-hidden scroll-smooth px-4 py-2 whitespace-nowrap md:overflow-hidden"
          ref={emblaRef}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="embla__side bg-container relative min-w-[258px] flex-shrink-0 snap-center overflow-hidden rounded-3xl p-6"
            >
              <div className="absolute top-0 left-0 h-25 w-25 rounded-full bg-[#374A6D] blur-3xl" />
              <div>
                <h3 className="text-2xl">Porche</h3>
                <p className="text-text text-base"> Turbo 5</p>
              </div>
              <img
                src={brand1}
                alt=""
                className="my-4 block w-4/5 justify-self-end"
              />
              <div className="my-4 flex w-3/4 flex-wrap items-start gap-2 text-[13px]">
                <span className="flex items-center gap-2">
                  <BsSpeedometer2 />
                  <p>3.7sec</p>
                </span>
                <span className="flex items-center gap-2">
                  <GoGraph />
                  <p>356km/h</p>
                </span>
                <span className="flex items-center gap-2">
                  <GiGasPump />
                  <p>Electric</p>
                </span>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span>$114,900</span>
                <button className="absolute right-0 bottom-0 inline-flex h-12 w-12 items-center justify-center rounded-tl-3xl rounded-br-3xl bg-blue-500 p-3">
                  <CgShoppingBag />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
