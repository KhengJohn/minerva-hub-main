import Image from "next/image";
import { FC } from "react";

const Features: FC = () => {
  return (
    <div className="relative mt-36">
      <div className="container sm:px-10 2xl:px-0 bg-productBg bg-no-repeat bg-center">
        <h2 className="font-bold text-5xl text-[#313131] text-center">
          Core Features
        </h2>
        <div className="flex flex-col-reverse sm:flex-row gap-x-36 gap-y-10 py-28 ">
          <div className="relative basis-[50%] flex justify-between items-center">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 ml-[auto] mr-[auto] mt-[100px]"
              src="/img/products/banking/feature-1.png"
              alt="team image"
              width={300}
              height={700}
            />
            <div className="w-full h-[40%] absolute lg:bottom-5 bg-blue -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Automated Savings and Loan Management
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              It is clear that modern automation software for financial services
              providers usually comes as a full package, a solution that covers
              every part of the process.
            </p>
          </div>
        </div>
        {/* second */}
        <div className="flex flex-col-reverse sm:flex-row-reverse gap-x-36 gap-y-10 py-10 lg:h-[50%]">
          <div className="relative basis-[50%] flex justify-between items-center">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 ml-[auto] mr-[auto] mt-[100px]"
              src="/img/products/banking/feature-2.png"
              alt="team image"
              width={300}
              height={700}
            />
            <div className="w-full h-[40%] absolute lg:bottom-5 bg-blue -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Transactions through Card, USSD and Bank Transfer
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              Designated mobile App to perform transactions through Card, USSD
              and Bank Transfer You don’t need Internet data on your phone to
              enjoy the USSD code
            </p>
          </div>
        </div>
        {/* third  */}
        <div className="flex flex-col-reverse sm:flex-row gap-x-36 gap-y-10 py-10 lg:h-screen">
          <div className="relative basis-[50%] flex justify-between items-center">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 ml-[auto] mr-[auto] mt-[100px]"
              src="/img/products/banking/feature-3.png"
              alt="team image"
              width={300}
              height={700}
            />
            <div className="w-full h-[40%] absolute lg:bottom-5 bg-blue -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Self-customizable notifications
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              Personalized Push notifications are real-time updates and
              reminders that are customized as per the user behaviour and
              journey. We Offer Self-customizable notifications for
              members/customers transactions
            </p>
          </div>
        </div>
        {/* Fourth */}
        <div className="flex flex-col-reverse sm:flex-row gap-x-36 gap-y-10 py-28 ">
          <div className="relative basis-[50%] flex justify-between items-center">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 ml-[auto] mr-[auto] mt-[100px]"
              src="/img/products/banking/feature-4.png"
              alt="team image"
              width={1000}
              height={1000}
            />
            <div className="w-full absolute lg:bottom-5 -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Unlimited branch creation and maintenance
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              Incase of expansion it's so easy to create branches and manage
              them from any location easily{" "}
            </p>
          </div>
        </div>
        {/* Fifth*/}
        <div className="flex flex-col-reverse sm:flex-row-reverse gap-x-36 gap-y-10 py-10 lg:h-[50%]">
          <div className="relative basis-[50%] flex justify-between items-center">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 ml-[auto] mr-[auto] mt-[100px]"
              src="/img/products/banking/feature-1.png"
              alt="team image"
              width={300}
              height={700}
            />
            <div className="w-full h-[40%] absolute lg:bottom-5 bg-blue -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Staff management
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              Creating, modifying staff roles and access has never been easier.
              Moreover, staff can be transferred from one branch location to the
              other for business continuity
            </p>
          </div>
        </div>
        {/* Sixth */}
        <div className="flex flex-col-reverse sm:flex-row gap-x-36 gap-y-10 py-28 ">
          <div className="relative basis-[50%] flex justify-between items-center">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 ml-[auto] mr-[auto] mt-[100px] "
              src="/img/products/banking/feature-1.png"
              alt="team image"
              width={300}
              height={700}
            />
            <div className="w-full h-[40%] absolute lg:bottom-5 bg-blue -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Financial management
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              Monitor and review your balance sheet, expense and income postings
              for proper analysis
            </p>
          </div>
        </div>
        {/* Seventh */}
        <div className="flex flex-col-reverse sm:flex-row-reverse gap-x-36 gap-y-10 py-10 lg:h-[50%]">
          <div className="relative basis-[50%] flex justify-between items-center">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 ml-[auto] mr-[auto] mt-[100px]"
              src="/img/products/banking/feature-2.png"
              alt="team image"
              width={300}
              height={700}
            />
            <div className="w-full h-[40%] absolute lg:bottom-5 bg-blue -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Cash analysis and fraud maintenance
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              Monitor and control cash flow across the business to
              mitigate fraud
            </p>
          </div>
        </div>
        {/* Eight */}
        <div className="flex flex-col-reverse sm:flex-row gap-x-36 gap-y-10 py-28 ">
          <div className="relative basis-[50%] flex justify-between items-center">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 ml-[auto] mr-[auto] mt-[100px] "
              src="/img/products/banking/feature-1.png"
              alt="team image"
              width={300}
              height={700}
            />
            <div className="w-full h-[40%] absolute lg:bottom-5 bg-blue -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Proper customer communication to customers and members via email
              and/or sms
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              Customers can be communicated directly from the application either
              directly or in bulk through email and/or sms
            </p>
          </div>
        </div>
        {/* Ninth */}
        <div className="flex flex-col-reverse sm:flex-row-reverse gap-x-36 gap-y-10 py-10 lg:h-[50%]">
          <div className="relative basis-[50%] flex justify-between items-center">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 ml-[auto] mr-[auto] mt-[100px]"
              src="/img/products/banking/feature-9.png"
              alt="team image"
              width={300}
              height={700}
            />
            <div className="w-full h-[40%] absolute lg:bottom-5 bg-blue -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Free Mobile App
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              Customers/members can still transact with the business rmwhile the
              prospective ones can sign up or open account remotely through the
              provided customized free mobile app listed on the
              various app stores
            </p>
          </div>
        </div>
        {/* Tenth */}
        <div className="flex flex-col-reverse sm:flex-row gap-x-36 gap-y-10 py-28 ">
          <div className="relative basis-[50%] flex justify-between items-center">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 ml-[auto] mr-[auto] mt-[100px] "
              src="/img/products/banking/feature-10.png"
              alt="team image"
              width={300}
              height={700}
            />
            <div className="w-full h-[40%] absolute lg:bottom-5 bg-blue -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Highly scalable and very fast
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              High speed system that scales as the business grows
            </p>
          </div>
        </div>
        {/* Eleventh */}
        <div className="flex flex-col-reverse sm:flex-row-reverse gap-x-36 gap-y-10 py-10 lg:h-[50%]">
          <div className="relative basis-[50%] flex justify-between items-center">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 ml-[auto] mr-[auto] mt-[100px]"
              src="/img/products/banking/feature-1.png"
              alt="team image"
              width={300}
              height={700}
            />
            <div className="w-full h-[40%] absolute lg:bottom-5 bg-blue -z-20"></div>
          </div>
          <div className="sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Automatic backup of data
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              Download and back up data easily at anytime for offline or future
              business analysis
            </p>
          </div>
        </div>{" "}
        {/* Twelve */}
        <div className="flex flex-col-reverse sm:flex-row gap-x-36 gap-y-10 py-28 ">
          <div className="relative basis-[50%] flex justify-between items-center">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 ml-[auto] mr-[auto] mt-[100px] "
              src="/img/products/banking/feature-12.png"
              alt="team image"
              width={300}
              height={700}
            />
            <div className="w-full h-[40%] absolute lg:bottom-5 bg-blue -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              24hrs assistance
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              Customer service available to handle the business and it's
              customers issues anytime
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
