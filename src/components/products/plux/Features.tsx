import Image from "next/image";
import { FC } from "react";

const Features: FC = () => {
  return (
    <div className="relative mt-36">
      <div className="container w-[100%] sm:px-10 2xl:px-0 bg-productBg bg-no-repeat bg-cover">
        <h2 className="font-bold text-5xl text-[#313131] text-center">
          Benefits
        </h2>
        {/* first */}
        <div className="flex mt-20 flex-col-reverse sm:flex-row gap-x-36 gap-y-10 pt-28 lg:h-screen">
          <div className="relative basis-[50%] flex justify-between items-center lg:bottom-36">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 mb-[auto] ml-[auto] mr-[auto]"
              src="/img/products/plux/feature-1.png"
              alt="team image"
              width={250}
              height={250}
            />
            <div className="w-full h-[60%] absolute bottom-0 bg-blue -z-20"></div>
          </div>
          <div className="mt-0 sm:mt-0 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Zero commission charge
            </h3>
            <p className="text-lg text-[#575757] mt-8">
              Commission-free trading just means that we don't charge you for
              any transaction on our platform. And the benefit is that more of
              your money gets spent on investing rather than fees.
            </p>
          </div>
        </div>

        {/* second */}

        <div className="flex mt-10 flex-col-reverse sm:flex-row-reverse gap-x-36 gap-y-10 py-10 lg:py-0 ">
          <div className="relative basis-[50%] flex justify-between items-center lg:bottom-36">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 mb-[auto] ml-[auto] mr-[auto]"
              src="/img/products/plux/feature-2.png"
              alt="team image"
              width={250}
              height={250}
            />
            <div className="w-full h-[60%] absolute lg:bottom-0 bg-blue -z-20"></div>
          </div>
          <div className="mt-0 sm:mt-0 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Make Payments For Both Prepaid and Postpaid
            </h3>
            <p className="text-lg text-[#575757] mt-8">
              Prepaid connections can be an excellent choice for students and
              those looking for cost-effective options, while Postpaid
              connections may be preferable for people with fixed salaries
              because they can easily pay their bills
            </p>
          </div>
        </div>

        {/* third  */}
        <div className="flex mt-10 flex-col-reverse sm:flex-row gap-x-36 gap-y-10 py-10">
          <div className="relative basis-[50%] flex justify-between items-center lg:bottom-36">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10  mb-[auto] ml-[auto] mr-[auto]"
              src="/img/products/plux/feature-3.png"
              alt="team image"
              width={250}
              height={250}
            />
            <div className="w-full h-[60%] absolute bottom-0 bg-blue -z-20"></div>
          </div>
          <div className="mt-0 sm:mt-0 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Easy payment tracking
            </h3>
            <p className="text-lg text-[#575757] mt-8">
              Payment Tracking System is a system for tracking and managing the
              payments for various vendors. It provides a single point of
              contact that consolidates payment requests from the accounts
              department to the top management to deliver the supplier payments
              on time, using integrated best practices to manage operations and
              services.
            </p>
          </div>
        </div>

        {/* Fourth */}

        <div className="flex mt-10 flex-col-reverse sm:flex-row-reverse gap-x-36 gap-y-10 py-10 lg:py-0 ">
          <div className="relative basis-[50%] flex justify-between items-center lg:bottom-36">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 mb-[auto] ml-[auto] mr-[auto]"
              src="/img/products/plux/feature-4.png"
              alt="team image"
              width={250}
              height={250}
            />
            <div className="w-full h-[60%] absolute bottom-0 bg-blue -z-20"></div>
          </div>
          <div className="mt-0 sm:mt-0 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Cable payment with ease
            </h3>
            <p className="text-lg text-[#575757] mt-8">
              Make instant cable payment at discounted rates
            </p>
          </div>
        </div>

        {/* Fifth  */}
        <div className="flex mt-10 flex-col-reverse sm:flex-row gap-x-36 gap-y-10 py-10">
          <div className="relative basis-[50%] flex justify-between items-center lg:bottom-36">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10  mb-[auto] ml-[auto] mr-[auto]"
              src="/img/products/plux/feature-5.png"
              alt="team image"
              width={250}
              height={250}
            />
            <div className="w-full h-[60%] absolute bottom-0 bg-blue -z-20"></div>
          </div>
          <div className="mt-0 sm:mt-0 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Recharge wallet through airtime (conversion of airtime to make
              utility payment)
            </h3>
            <p className="text-lg text-[#575757] mt-8">
              You can fund your wallet directly from your phone airtime and make
              any utility bills payments
            </p>
          </div>
        </div>
        {/* Sixth */}

        <div className="flex mt-10 flex-col-reverse sm:flex-row-reverse gap-x-36 gap-y-10 py-10 lg:py-0 ">
          <div className="relative basis-[50%] flex justify-between items-center lg:bottom-36">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 mb-[auto] ml-[auto] mr-[auto]"
              src="/img/products/plux/feature-6.png"
              alt="team image"
              width={250}
              height={250}
            />
            <div className="w-full h-[60%] absolute bottom-0 bg-blue -z-20"></div>
          </div>
          <div className="mt-0 sm:mt-0 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Airtime Purchase
            </h3>
            <p className="text-lg text-[#575757] mt-8">
              Instant airtime purchase at discounted rate across all networks
            </p>
          </div>
        </div>
      </div>
      <Image
        className="absolute bottom-0 right-0"
        src="/img/products/product-curve.svg"
        alt="Icon"
        width={150}
        height={150}
      />
    </div>
  );
};

export default Features;
