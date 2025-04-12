import { RiFlashlightFill } from "react-icons/ri";
import { data } from "../../utils/constants";
import Car from "../../assets/home 1.png";

const Hero = () => {
  return (
    <div className="relative pt-[6rem]">
      <div className="absolute -top-50 -left-50 h-[400px] w-[400px] rounded-full bg-[#3f5174] opacity-50 blur-3xl sm:-top-32 sm:-left-[280px] sm:h-[500px] sm:w-[500px]" />
      <div className="absolute -right-[200px] -bottom-20 h-[350px] w-[350px] rounded-full bg-[#3f5174] opacity-50 blur-3xl sm:-right-[300px] sm:h-[450px] sm:w-[450px]" />

      <div className="relative flex flex-col items-center justify-center">
        <h1 className="font-exo mb-2.5 text-2xl font-bold text-white sm:mb-5 sm:text-3xl md:text-4xl/[2.5rem]">
          Choose The Best Car
        </h1>
        <h2 className="font-exo text-base font-medium text-white sm:text-xl md:text-2xl/[1.5rem]">
          Porsche Mission E
        </h2>
        <div className="mt-1 flex items-center gap-x-1 sm:mt-2 sm:gap-x-2">
          <RiFlashlightFill className="text-first" />
          <p className="font-exo text-text text-xs font-normal sm:text-base">
            Electric Car
          </p>
        </div>
        <img
          src={Car}
          alt="a nice ride"
          className="mt-10 w-[17.5rem] transition-all duration-100 sm:w-min"
        />

        <div className="mt-10 flex w-full sm:w-[25.4rem]">
          {data.map((item) => (
            <div className="flex w-full flex-col items-center justify-between">
              <div className="bg-container flex h-6 w-6 items-center justify-center rounded-full sm:h-8 sm:w-8">
                <item.icon className="text-white" />
              </div>
              <h2 className="mt-4 mb-1 text-xl text-white sm:text-2xl">
                {item.value}
              </h2>
              <p className="text-light text-xs font-normal uppercase sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <figure className="mt-14 flex h-[90px] w-[90px] items-center justify-center rounded-full p-2 outline-2 outline-[#02DB8A] drop-shadow-[0_0_10px_#02DB8A]">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full p-2 outline outline-[#02DB8A]">
            <p className="text-center text-sm font-normal text-white uppercase">
              Start
            </p>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Hero;
