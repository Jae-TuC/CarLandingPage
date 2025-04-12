import subscribe from "@/assets/subscribe.png";
import bg from "@/assets/subscribe-bg.png";

const SpecialOffers = () => {
  return (
    <div className="relative overflow-hidden bg-transparent px-6 py-12 text-white sm:px-8 md:px-12 xl:px-[14rem]">
      <img
        src={bg}
        alt=""
        className="absolute top-0 right-0 -z-10 h-full w-full object-cover"
      />
      <div className="flex flex-col items-start md:flex-row lg:items-center">
        <div className="w-full md:w-3/5">
          <h2 className="text-title mb-8 text-2xl font-semibold">
            Do You Want To Receive <br /> Special Offers?
          </h2>
          <p className="text-text mb-8">
            Be the first to receive all the information about our products and
            new cars by email by subscribing to our mailing list.
          </p>
          <button className="bg-first rounded-[4px] px-8 py-4 text-base font-medium sm:py-3.5">
            Subscribe Now
          </button>
        </div>
        <img
          src={subscribe}
          alt=""
          className="mt-20 ml-30 w-[450px] min-w-[400px] sm:mt-20 sm:ml-20 sm:w-[500px] lg:ml-0"
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
