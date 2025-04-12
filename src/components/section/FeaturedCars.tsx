import { useState } from "react";
import { CgShoppingBag } from "react-icons/cg";

import { cn } from "../../utils/cn";
import { luxCars, categories } from "../../utils/constants";

const FeaturedCars = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].value);
  const [filteredCars, setFilteredCars] = useState(luxCars);

  const handleCategory = (categoryValue: string) => {
    setActiveCategory(categoryValue);
    if (categoryValue === "all") {
      setFilteredCars(luxCars);
    } else {
      setFilteredCars(luxCars.filter((car) => car.category === categoryValue));
    }
  };

  return (
    <div className="bg-body relative py-[4.5rem]">
      <div className="flex flex-col items-center justify-center xl:px-[12.5rem]">
        <h2 className="text-title text-center text-2xl font-semibold tracking-wider">
          Featured Luxury Cars
        </h2>

        <div className="mt-12 flex items-center justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={cn(
                "bg-container text-title",
                activeCategory === category.value &&
                  "bg-first hover:bg-first/90",
                "flex size-14 cursor-pointer items-center justify-center rounded-xl capitalize",
              )}
              onClick={() => handleCategory(category.value)}
            >
              {category.icon ? (
                <img
                  src={category.icon}
                  alt={category.label}
                  className="h-6 w-6"
                />
              ) : (
                category.label
              )}
            </button>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 px-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map(({ id, name, model, image, price }) => (
            <div
              key={id}
              className="embla__slide bg-container relative mx-2 flex h-[312px] w-[248px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-3xl p-6 sm:mx-4 lg:mx-2"
            >
              <div className="absolute top-[50%] left-[50%] h-25 w-25 -translate-x-10 translate-y-[-50%] rounded-full bg-[#374A6D] blur-3xl" />
              <div>
                <h3 className="text-title text-2xl">{name}</h3>
                <p className="text-text text-base">{model}</p>
              </div>
              <img
                src={image}
                alt={`${name} ${model}`}
                className="my-4 mt-16 block w-4/5 justify-self-end"
              />
              <div className="-mb-6 flex w-full items-center justify-between">
                <span className="text-title mb-8 text-xl">${price}</span>
                <button className="absolute right-0 bottom-0 inline-flex h-12 w-12 items-center justify-center rounded-tl-3xl rounded-br-3xl bg-blue-500 p-3 text-white">
                  <CgShoppingBag />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
