
import React from "react";
import { useParams } from "react-router-dom";
import data from "../img/PackageDetailImages"
 import packages from "./Packages";
import Header from "./Header";
import Footer from "./Footer";
import whatsAppButton from "../img/WhatsAppButtonSmall.png"

const PackageDetail =()=> {


    // const [resInfo,setResInfo] = useState(null);
    const {packageId}= useParams();

    // 
    
const detail = packages.find((item)=> item.id==packageId)
const [active, setActive] = React.useState(
  "https://media1.thrillophilia.com/filestore/g7ia5xgj74exj29gi7wte99l5xd6_shutterstock_731136526.jpg?w=305&h=230&dpr=2.0",
);

5


 return (

<div >


 
<div className="m-4 md:m-20 flex flex-col md:flex-row justify-around gap-10 mt-10 mb-10">
  {/* Left section */}
  <div className="w-full md:w-1/2">
    <h1 className="font-bold text-3xl md:text-4xl mb-6">{detail.name}</h1>

    {detail.itinery.map((Item, index) => (
      <div key={index}>
        {Object.keys(Item).map((dayKey) => (
          <div key={dayKey}>
            <h3 className="font-semibold text-[#FF9000] text-lg md:text-xl">{Item[dayKey].Day}: {Item[dayKey].heading}</h3>
            <p className="text-sm text-justify p-4">{Item[dayKey].description}</p>
            <br />
          </div>
        ))}
      </div>
    ))}
  </div>

  {/* Right section */}
  <div className="w-full md:w-1/2 flex flex-col space-y-4">
  {/* Main Image */}
  <div className="flex-shrink-0">
    <img
      className="w-full rounded-lg object-cover object-center"
      src={active}
      alt=""
    />
  </div>

  {/* Thumbnail Grid */}
  <div className="px-2 md:px-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
    {data.map(({ imgelink }, index) => (
      <div key={index}>
        <img
          onClick={() => setActive(imgelink)}
          src={imgelink}
          className="h-16 w-16 md:h-20 md:w-20 cursor-pointer rounded-lg object-cover object-center"
          alt="gallery-image"
        />
      </div>
    ))}
  </div>

  {/* WhatsApp Button */}
  <div className="flex justify-center">
    <a href="https://wa.me/917780861175">
      <img src={whatsAppButton} alt="WhatsApp Button" />
    </a>
  </div>
</div>

</div>

  
<Footer/>

 </div>
)    
}

export default PackageDetail;