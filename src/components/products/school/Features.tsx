import Image from "next/image";
import { FC } from "react";

const Features: FC = () => {
  return (
    <div className="relative my-36">
      <div className="container sm:px-10 2xl:px-0 bg-productBg bg-no-repeat bg-center">
        <h2 className="font-bold text-5xl text-[#313131] text-center">
          Core Features
        </h2>
        <div className="flex flex-col-reverse sm:flex-row gap-x-36 gap-y-10 py-28 ">
          <div className="relative basis-[50%]">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 rounded-lg"
              src="/img/products/school/feauture-1.png"
              alt="team image"
              width={600}
              height={600}
            />
            <div className="w-full h-[40%] absolute bottom-5  -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Auto-tracking and generation of all fees report
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              Data is accessible by parents, teachers, students, and several
              other participants in the process. Fees can be paid online by
              parents or students without waiting at fee counters in schools.
            </p>
          </div>
        </div>

        {/* second */}

        <div className="flex flex-col-reverse sm:flex-row-reverse gap-x-36 gap-y-10 py-10 ">
          <div className="relative basis-[50%]">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 rounded-lg"
              src="/img/products/school/feauture-2.png"
              alt="team image"
              width={600}
              height={600}
            />
            <div className="w-full h-[40%] absolute bottom-5  -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Educational and Financial Management
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              Financial management is the key to efficient handling of finances
              in educational institutions. The term financial management doesn’t
              only confine to budget management.
            </p>
          </div>
        </div>

        {/* third  */}
        <div className="flex flex-col-reverse sm:flex-row gap-x-36 gap-y-10 py-10">
          <div className="relative basis-[50%]">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 rounded-lg"
              src="/img/products/school/feauture-3.png"
              alt="team image"
              width={600}
              height={600}
            />
            <div className="w-full h-[40%] absolute bottom-5  -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Generation of Staff and Students’ ID card
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              The staff ID card is worn by the teaching and non-teaching staff
              of the school/college/university, and it is more or less similar
              to the student ID card in purpose.
            </p>
          </div>
        </div>
        {/* Fourth */}

        <div className="flex flex-col-reverse sm:flex-row-reverse gap-x-36 gap-y-10 py-10 ">
          <div className="relative basis-[50%]">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 rounded-lg"
              src="/img/products/school/feauture-4.png"
              alt="team image"
              width={600}
              height={600}
            />
            <div className="w-full h-[40%] absolute bottom-5  -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Generate school fees payment and invoices
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              It helps to generate customized school fees payments for any class
              or school in general at any point in time and also helps to
              generate instant printable receipts for students that has paid
              school fees and invoices for students that are yet to pay
              for school fees.
            </p>
          </div>
        </div>

        {/* Fifth  */}
        <div className="flex flex-col-reverse sm:flex-row gap-x-36 gap-y-10 py-10">
          <div className="relative basis-[50%]">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 rounded-lg"
              src="/img/products/school/feauture-5.png"
              alt="team image"
              width={600}
              height={600}
            />
            <div className="w-full h-[40%] absolute bottom-5  -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Notification via text and or email
            </h3>
            <p className="text-xl text-[#575757] mt-8">
            Information can be sent to parents and guardians directly from the application through the bulk sms delivery and instant email communication either to a particular class group or the school in general
            </p>
          </div>
        </div>
        {/* Sixth*/}

        <div className="flex flex-col-reverse sm:flex-row-reverse gap-x-36 gap-y-10 py-10 ">
          <div className="relative basis-[50%]">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 rounded-lg"
              src="/img/products/school/feauture-6.png"
              alt="team image"
              width={600}
              height={600}
            />
            <div className="w-full h-[40%] absolute bottom-5  -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Real time continuous assessment / report card
            </h3>
            <p className="text-xl text-[#575757] mt-8">
            Continuous assessment is captured and report card generated real time so as to monitor and follow up with students’ performance
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
