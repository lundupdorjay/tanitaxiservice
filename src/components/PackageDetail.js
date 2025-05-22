
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


 
 <div className="m-20 flex justify-around  mt-10 mb-10">
      <div className="w-[50%]">

        <h1 className="bold text-4xl mb-8">{detail.name}</h1>
        

        {detail.itinery.map((Item,index)=>
      (    <div key={index}>

        {Object.keys(Item).map((dayKey) => (
          <div key={dayKey}>
            <h3 className="bold text-[#FF9000] text-xl">{Item[dayKey].Day}  :  {Item[dayKey].heading}</h3>
            
            <p className="text-x text-justify p-5">{Item[dayKey].description}</p>
            <br/>
          </div>
        ))}
      </div>


        ))

        }
       
      </div>
      <div className=" w-[50%]grid gap-4 ">
          <div>
            <img
              className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
              src={active}
              alt=""
            />
          </div>
          <div className=" p-10 grid grid-cols-5 gap-4">
            {data.map(({ imgelink }, index) => (
              <div key={index}>
                <img
                  onClick={() => setActive(imgelink)}
                  src={imgelink}
                  className="h-20 w-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                  alt="gallery-image"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
                  <a href="https://wa.me/917780861175">
                    <img className="" src={whatsAppButton} href=""></img>
                  
                    </a></div>
      </div>

 </div>
  
<Footer/>

 </div>
)    
}

export default PackageDetail;