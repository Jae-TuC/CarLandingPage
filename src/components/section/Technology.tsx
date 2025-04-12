import aboutImg from "../../assets/about.png";

const Technology = () => {
  return (
    <div className="bg-body px-8 pt-[4.75rem] pb-[5.5rem] text-white md:px-32">
      <div className="grid grid-cols-1 items-center justify-items-start gap-y-32 md:gap-x-6 lg:grid-cols-2 lg:items-end lg:gap-x-10">
        <div className="md:ml relative ml-0">
          <img
            src={aboutImg}
            alt=" About Image of the Website"
            className="w-full rounded-md object-contain sm:w-max md:w-[30rem]"
          />
          <div className="absolute right-0 -bottom-14 flex flex-col items-center justify-end rounded-2xl bg-white/5 p-4 backdrop-blur-md">
            <h3 className="text-base font-semibold sm:text-xl">2500+</h3>
            <p className="mt-2 w-[8rem] text-center text-[13px] tracking-tight">
              Supercharges placed along popular routes
            </p>
          </div>
        </div>
        <div className="">
          <h2 className="mb-6 text-xl font-semibold sm:text-2xl">
            Machines With <br />
            Future Technology
          </h2>
          <p className="text-text mb-6 w-full text-left text-[15px] font-light sm:w-[26rem] sm:text-base">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with new
            and innovative platforms that last a long time.
          </p>
          <button className="bg-first rounded-[4px] px-8 py-4 text-base font-medium sm:py-3.5">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Technology;
