import map from "@/assets/map.png";
import feature from "@/assets/featured.png";

const MoreFeatures = () => {
  return (
    <div className="bg-body relative">
      <div className="relative flex flex-col items-center justify-center pt-[4.75rem] pb-[2rem] sm:pb-[6.5rem]">
        <h2 className="text-title text-xl font-semibold md:text-2xl">
          More Features
        </h2>

        <div className="relative flex w-full items-center justify-center">
          <img
            src={map}
            alt=""
            className="absolute -top-12 h-full w-full object-contain sm:top-0"
          />
          <div className="relative mt-10 sm:mt-30">
            <img
              src={feature}
              alt=""
              className="mt-5 h-[364px] w-[150px] sm:h-[462px] sm:w-[200px]"
            />
            <span className="absolute top-15 -left-1/5 z-20 h-[84px] w-[100px] -translate-x-2/5 rounded-2xl bg-white/10 backdrop-blur-xs sm:top-20 sm:h-[92px] sm:w-[127px]">
              <p className="flex w-full flex-col items-center justify-center px-4 py-2 text-white sm:px-6 sm:py-3">
                <h3 className="text-base font-semibold sm:text-2xl">800v</h3>
                <span className="flex flex-col items-center justify-center text-center text-xs sm:text-sm">
                  <p> Turbo</p>
                  <p>Charging</p>
                </span>
              </p>
            </span>
            <span className="absolute top-36 -right-[140px] z-20 h-[84px] w-[100px] -translate-x-3/4 rounded-2xl bg-white/10 backdrop-blur-xs sm:h-[92px] sm:w-[127px] sm:-translate-x-1/2">
              <p className="flex flex-col items-center justify-center px-4 py-2 text-white sm:px-6 sm:py-3">
                <h3 className="text-2xl font-semibold">350</h3>
                <span className="flex flex-col items-center justify-center text-center text-sm">
                  <p>KM</p>
                  <p>Range</p>
                </span>
              </p>
            </span>
            <span className="absolute bottom-10 -left-4 z-20 h-[84px] w-[100px] -translate-x-1/2 rounded-2xl bg-white/10 backdrop-blur-xs sm:bottom-30 sm:h-[92px] sm:w-[127px]">
              <div className="flex flex-col items-center justify-center px-4 py-3 text-white sm:px-6 sm:py-3">
                <h3 className="text-2xl font-semibold">480</h3>
                <span className="flex flex-col items-center justify-center text-center text-sm">
                  <p>KM</p>
                  <p>Travel</p>
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFeatures;
