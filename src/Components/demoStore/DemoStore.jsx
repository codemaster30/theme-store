import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

const DemoStore = () => {
  return (
    <div
      id="demo"
      className="w-11/12 md:w-10/12 max-w-[1800px] mx-auto my-32 md:my-48 "
    >
      <div class="items-center gap-12 my-24">
        <div className="flex justify-center items-center">
          <span class="bg-gradient-to-r from-[#F2994A] to-primaryColor font-bold inline-block text-transparent bg-clip-text md:text-8xl text-6xl lg:text-9xl">
            50+
          </span>
          <h2 class="lg:text-6xl md:text-5xl text-2xl block text-center font-bold text-gray-800  ">
            Stunning Demos
          </h2>
        </div>
        <div className=" mt-6 text-center">
          <p class=" text-gray-500 w-2/3 mx-auto font-semibold">
            All home pages, inner pages and elements are included with the
            purchase. Mix and blend elements from different demos as per your
            preference and create awesome store with Kalles!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((dta) => (
          <div key={1} className="rounded-md shadow-md shadow-slate-200 w-full">
            {/* Image */}
            <Link href={`/themes/${1}`}>
              {/* ${dta.id} */}
              <div
                className="w-full rounded-t-md h-96  overflow-hidden max-h-full flex flex-col-reverse bg-cover bg-no-repeat bg-top hover:bg-bottom duration-1000"
                style={{
                  // backgroundImage: `url(${dta?.featuredDesktopImage})`,
                  backgroundImage: `url('https://cdn.shopify.com/theme-store/qumk1q6o0adk0lzvfybn0xfr4rl3.jpg')`,
                }}
              ></div>
            </Link>

            <div className="p-3 py-8">
              <div className="flex items-center justify-between">
                <Link href={""}>
                  {" "}
                  <h1 className="text-lg font-semibold hover:opacity-50 text-black "> ABCD</h1>
                </Link>
                <Link href={""}>
                  <h1 className="text-4xl hover:text-primaryColor text-black opacity-50 hover:opacity-100 font-semibold">
                    <HiOutlineExternalLink />
                    {/* ${dta?.price} <span className="text-base">USD</span> */}
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemoStore;
