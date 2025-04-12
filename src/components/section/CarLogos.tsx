import { carLogos } from "../../utils/constants";

const CarLogos = () => {
  return (
    <div className="bg-body relative overflow-hidden px-6 py-12 text-white xl:px-[16rem]">
      <div className="flex flex-wrap items-center justify-center gap-x-28 gap-y-10">
        {carLogos.map((logo) => (
          <div key={logo.id}>
            <img src={logo.img} alt={`brand-${logo.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarLogos;
