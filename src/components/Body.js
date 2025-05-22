

import logo from "../img/homepage2.png"
import products from "../components/Products";
import productTaxi from "./productTaxi";
import packages from "./Packages"
import upcomingTour from "./UpcomingTour";

import bikeTour from "../img/bikeTour.jpg"
import bikeTour2 from "../img/bikeTour2.png"
import { Link } from "react-router-dom";
import whatsAppButton from "../img/whatsAppButtonSmall.png"
import taxihome from "../img/taxiHome4.png"

import features from "./Features"

import Shimmer from "./Shimmer";






const Body= ()=>{

  return(
   
<div className="bg-[#f0e9ec]  w-[100vw] m-auto">

<div className="absolute w-[100%]">

</div>

<div className="relative w-full overflow-hidden max-h-[60vh] hidden md:block">
  <img
    className="w-full h-auto rounded-lg"
    src="https://www.bookmytaxi.co/storage/sliders/February2019/R3XkRthvFl4SMyWqAXY9.jpg"
    alt="Taxi Banner"
  />

  <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-r from-gray-900 opacity-50"></div>
</div>



<div>
<a href="https://wa.me/918899307419">
  <img className="right fixed bottom-0 animate-bounce" src={whatsAppButton} href=""></img>

  </a></div>

 <div class="relative flex justify-center px-4 py-10 sm:absolute sm:top-40 sm:left-36 sm:w-96">
  <div class="text-center sm:text-left">
    <h1 class="whitespace-nowrap text-3xl sm:text-6xl text-[#0f0f0f] font-bold pr-0 sm:pr-5 sm:border-r border-white">
      Welcome to
    </h1>
    <h1 class="animate-typing overflow-hidden whitespace-nowrap text-4xl sm:text-7xl text-indigo-700 font-bold pr-0 sm:pr-5">
      Tani Taxi Service
    </h1>
  </div>
</div>
{/* // our service */}
<div>

<section class=" rounded-3xl bg-[#f0e9ec] text-gray-900 body-font ">
<h1 class=" mt-10 text-4xl text-center font-extrabold leading-none tracking-tight text-indigo-600 md:text-5xl lg:text-6xl dark:text-white">What We Offer</h1>
  <div class="container text-gray-900 px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-900 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={bikeTour} alt="blog"/>
          <div class="p-6">
        
            <h1 class="title-font text-3xl font-bold text-gray-900 mb-3">Ladakh Tour Packages</h1>
            <p class="leading-relaxed mb-3">Explore Ladakh’s stunning landscapes, culture, and monasteries with our customizable, all-inclusive travel packages.</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-900 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={bikeTour2} alt="blog"/>
          <div class="p-6">
        
            <h1 class="title-font text-3xl font-bold  text-gray-900 mb-3">Bike for Rent</h1>
            <p class="leading-relaxed mb-3">Affordable, well-maintained bikes for local rides or road trips. Daily and weekly rentals available.</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-900 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://media1.thrillophilia.com/filestore/ijjtxc4sgfecxjn6j8h82lauycey_qiramhk79748n34rxzuc0odmgtsi_1616154272_shutterstock_427059418.webp?w=100&dpr=2" alt="blog"/>
          <div class="p-6">
        
            <h1 class="title-font text-3xl font-bold  text-gray-900 mb-3">Taxi Service</h1>
            <p class="leading-relaxed mb-3">Safe, on-time taxi service for local and outstation travel. Comfortable rides with experienced drivers at fair prices.</p>
            
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
{/* <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Avaiable Bikes
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Reform"
            src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Tuple"
            src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="SavvyCal"
            src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Statamic"
            src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div> */}
</div>


{/* type of Bikes */}
<div className=" bg-[#f0e9ec] rounded-3xl m-5">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h1 class=" mb-5 text-4xl text-center font-extrabold leading-none tracking-tight text-indigo-600 md:text-5xl lg:text-6xl dark:text-white">Available Vehicles</h1>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-900">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              <a target="_blank" href='https://api.whatsapp.com/send/?phone=918899307419&text&type=phone_number&app_absent=0'><button class=" animate-pulse bg-[#fdcb6e] hover:bg-blue-300 text-gray-900 font-bold py-2 px-4 border  rounded-lg" >
  Enquire Now
</button>
</a>
            </a>
            
          ))}
        </div>
      </div>
    </div>

    {/* // Bike TOur Packages */}
    <div className="bg-[#f0e9ec] m-5 rounded-3xl">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h1 class=" mb-5 text-4xl text-center font-extrabold leading-none tracking-tight text-indigo-600 md:text-5xl lg:text-6xl dark:text-white">Bike Tour Packages</h1>

        <div className="  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {packages.map((product) => (
            <Link key={product.id} to={"/packages/"+product.id} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-900">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>


    {/* // Upcoming Bike Tour */}
    {/* <div className=" m-5 bg-[#f0e9ec] rounded-3xl">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h1 class=" mb-5 text-4xl text-center font-extrabold leading-none tracking-tight text-indigo-600 md:text-5xl lg:text-6xl dark:text-white">Hire Taxi</h1>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {upcomingTour.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-900">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div> */}

 {/* Taxi Service */}

 {/* <div className=" bg-[#f0e9ec] rounded-3xl m-5">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h1 class=" mb-5 text-4xl text-center font-extrabold leading-none tracking-tight text-indigo-600 md:text-5xl lg:text-6xl dark:text-white">Available Taxi</h1>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-900">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              <a target="_blank" href='https://api.whatsapp.com/send/?phone=919906739294&text&type=phone_number&app_absent=0'><button class=" animate-pulse bg-[#fdcb6e] hover:bg-blue-300 text-gray-900 font-bold py-2 px-4 border  rounded-lg" >
  Enquire Now
</button>
</a>
            </a>
            
          ))}
        </div>
      </div>
    </div> */}
{/* MAP */}


<div className="overflow-hidden bg-[#f0e9ec] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Tani Taxi Service</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Meet Us
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              Get ready to rev up your next adventure! Our motorbike tour agency is dedicated to providing you with unforgettable experiences on two wheels. Come visit us at our office to plan your next thrilling ride.

              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <iframe 
            className=" h-[38rem] w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.959903848562!2d77.5837522!3d34.1650073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdebaf9946c22b%3A0xc70c43ef97eadb60!2sHidden%20North%20Adventures!5e1!3m2!1sen!2sin!4v1738664494871!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          {/* <img
            alt="Product screenshot"
            src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
            
          /> */}
        </div>
      </div>
    </div>

{/* //Footer */}


    </div>
  )

}
export default Body;