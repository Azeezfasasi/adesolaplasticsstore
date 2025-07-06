import about1 from '../images/product-image/about1.jpg'

function OurMission() {
  return (
    <>
    <div className="min-h-screen bg-white font-inter flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Container for the entire section */}
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Main Mission Statement */}
        <div className="mb-0 flex flex-col justify-start items-center mx-auto">
          <p className="text-orange-600 uppercase tracking-wide text-[14px] lg:text-[20px] font-semibold mb-4 text-center lg:text-center">Our Mission</p>
          <h1 className="text-[25px] md:text-[30px] lg:text-[32px] font-bold text-gray-800 leading-tight text-center lg:text-center max-w-4xl mx-auto lg:mx-0">
            At Adesola Plastics Store, our mission is to deliver high-quality, innovative, and affordable plastic solutions that improve everyday life for families, businesses, and communities across Nigeria.
          </h1>
        </div>

        {/* Bottom Section: Image and Detailed Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Left Side: Image */}
          <div className="w-full flex justify-center items-center">
            <img
              src={about1}
              alt="About Adesola Plastics Store"
              className="rounded-3xl shadow-xl object-fill w-full h-[300px] md:h-[400px]"
            />
          </div>

          {/* Right Side: Detailed Description */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              We are passionate about providing durable, safe, and eco-friendly plastic products that meet the diverse needs of our customers. From household essentials to industrial containers, we are committed to quality, reliability, and customer satisfaction.<br /><br />
              Our vision is to be the trusted leader in the plastics industry, setting the standard for excellence and sustainability. We invest in modern technology, skilled people, and responsible practices to ensure every product we deliver makes life easier and better for you.<br /><br />
              At Adesola Plastics Store, your needs inspire us to innovate and serve with integrity every day.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default OurMission