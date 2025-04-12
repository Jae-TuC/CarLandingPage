import { CgShoppingBag } from "react-icons/cg";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { brands } from "../../utils/constants";

const Brands = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    // containScroll: "trimSnaps",
    // loop: true,
    dragFree: true,
    breakpoints: {
      "(min-width: 910px)": { active: false },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      setScrollSnaps(emblaApi.scrollSnapList());
      emblaApi.on("select", onSelect);
      onSelect();
    }
  }, [emblaApi, onSelect]);

  return (
    <div className="bg-body relative pt-[4.75rem] pb-[3rem] text-white">
      <div className="relative flex flex-col items-center justify-center">
        <h2 className="text-title w-[280px] text-start text-2xl md:text-center">
          Choose Your Electric Car Of The Porsche Brand
        </h2>
        <section className="embla mx-auto w-full max-w-[880px] lg:px-4">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container mt-14 flex lg:justify-center">
              {brands.map(({ name, model, image, price, details }, index) => (
                <div
                  key={index}
                  className="embla__slide bg-container relative mx-2 min-w-[240px] flex-shrink-0 overflow-hidden rounded-3xl p-6 sm:mx-4 lg:mx-2"
                >
                  <div className="absolute top-0 left-0 h-25 w-25 rounded-full bg-[#374A6D] blur-3xl" />
                  <div>
                    <h3 className="text-2xl">{name}</h3>
                    <p className="text-text text-base">{model}</p>
                  </div>
                  <img
                    src={image}
                    alt=""
                    className="my-4 block w-4/5 justify-self-end"
                  />
                  <div className="my-4 flex w-3/4 flex-wrap items-start gap-2 text-[13px]">
                    {details.map(({ icon: Icon, label }, index) => (
                      <span className="flex items-center gap-2" key={index}>
                        <Icon />
                        <p>{label}</p>
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span>${price}</span>
                    <button className="absolute right-0 bottom-0 inline-flex h-12 w-12 items-center justify-center rounded-tl-3xl rounded-br-3xl bg-blue-500 p-3">
                      <CgShoppingBag />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="embla__dots mt-6 flex justify-center space-x-2 min-md:hidden">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const DotButton = ({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    className={`embla__dot h-2 w-2 rounded-full transition-colors duration-200 ${
      selected ? "bg-blue-500" : "bg-text"
    }`}
    type="button"
    onClick={onClick}
  />
);

export default Brands;
