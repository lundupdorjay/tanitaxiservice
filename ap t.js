import React, { createElement } from "react";
import ReactDOM from "react-dom/client"

const Header = () => {

    return(
          <div className="header">
            <div className="logo-container">
                <img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"/>
                
            </div>
         <div className="navItems">
               <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
               </ul>

         </div>

          </div>
    )

      
  


}



const RestaurantCard =({resData})=>{

  // const {resData}= props;
  console.log("this is res Data" )
  // console.log(resData)
  
  return(
    
    <div className="res-card">

      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ imageId}></img>
      <h3>{resData.name}</h3>
      <h4>{category}</h4>
      <h4>{ratings+"  stars"}</h4>
      <h4>20 minutes</h4>

      
    </div>
  )
}




  const resObj = 

     [
          
         
       
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "84509551",
                "name": "Biryani Rice",
                "category": "Rice And Biryani",
                "description": "Serves 1 | Melt-in-the-mouth idlis steamed to perfection and topped with a dousing of ghee.",
                "imageId": "a500c52cad1379c52962c6407f53d6ba",
                "price": 12000,
                "variants": {
                  
                },
                "variantsV2": {
                  
                },
                "itemAttribute": {
                  "vegClassifier": "NONVEG",
                  "portionSize": "Serves 1"
                },
                "ribbon": {
                  "text": "Bestseller",
                  "textColor": "#ffffff",
                  "topBackgroundColor": "#d53d4c",
                  "bottomBackgroundColor": "#b02331"
                },
                "showImage": true,
                "itemBadge": {
                  
                },
                "badgesV2": {
                  
                },
                "isBestseller": true,
                "ratings": {
                  "aggregatedRating": {
                    "rating": "3.8",
                    "ratingCount": "366 ratings",
                    "ratingCountV2": "366"
                  }
                }
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "84509544",
                "name": "Boneless Chicken Biryani",
                "category": "Rice And Biryani",
                "description": "Serves 1",
                "imageId": "tgh8gxxrh0k9ka0gpyjp",
                "price": 21500,
                "variants": {
                  
                },
                "variantsV2": {
                  
                },
                "itemAttribute": {
                  "vegClassifier": "NONVEG",
                  "portionSize": "Serves 1"
                },
                "ribbon": {
                  
                },
                "showImage": true,
                "itemBadge": {
                  
                },
                "badgesV2": {
                  
                },
                "ratings": {
                  "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "107 ratings",
                    "ratingCountV2": "107"
                  }
                }
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "84509543",
                "name": "Chilli Chicken Biryani",
                "category": "Rice And Biryani",
                "description": "A perfect remedy for common cold, slowly cooked mutton leg soup seasoned with vibrant flavours of whole spices.",
                "imageId": "gjo2ylekazfgwbkxjs4n",
                "price": 20000,
                "variants": {
                  
                },
                "variantsV2": {
                  
                },
                "itemAttribute": {
                  "vegClassifier": "NONVEG"
                },
                "ribbon": {
                  "text": "Bestseller",
                  "textColor": "#ffffff",
                  "topBackgroundColor": "#d53d4c",
                  "bottomBackgroundColor": "#b02331"
                },
                "showImage": true,
                "itemBadge": {
                  
                },
                "badgesV2": {
                  
                },
                "isBestseller": true,
                "ratings": {
                  "aggregatedRating": {
                    "rating": "3.7",
                    "ratingCount": "158 ratings",
                    "ratingCountV2": "158"
                  }
                }
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          }


        ]




      // "card": {
       
      //   "info": {
      //     "id": "84509544",
      //     "name": "Boneless Chicken Biryani",
      //     "category": "Rice And Biryani",
      //     "description": "Serves 1",
      //     "imageId": "tgh8gxxrh0k9ka0gpyjp",
      //     "price": 21500,
      //     "variants": {
            
      //     },
      //     "variantsV2": {
            
      //     },
      //     "itemAttribute": {
      //       "vegClassifier": "NONVEG",
      //       "portionSize": "Serves 1"
      //     },
      //     "ribbon": {
            
      //     },
      //     "showImage": true,
      //     "itemBadge": {
            
      //     },
      //     "badgesV2": {
            
      //     },
      //     "ratings": {
      //       "aggregatedRating": {
      //         "rating": "4.0",
      //         "ratingCount": "107 ratings",
      //         "ratingCountV2": "107"
      //       }
      //     }
      //   },
      //   "analytics": {
          
      //   },
      //   "hideRestaurantDetails": true
      // }
    




  








const Body =()=>{
  const { card: { info:{name, category, imageId,ratings} } } = resObj[2];
  
  return (

    <div className="body">
      <div className="search"> Search</div>
        <div className="res-container">


{
  resObj.map((restaurant)=><RestaurantCard resData={restaurant}/>

  )
}




{/* <RestaurantCard  name={name} category={category} imageId = {imageId} ratings={ratings.aggregatedRating.rating}/>
<RestaurantCard name = "KFC" category="Ladakhi"/>
<RestaurantCard name="The Turnip" category="Indian, Chinese"/>
<RestaurantCard name="Shelkhar" category="Indian, Chinese"/>
<RestaurantCard name="Punjabi Dhaba" category="Indian, Chinese"/> */}


        </div>


     

    </div>
  )
}


const AppLayout =()=>{

  return(

<div className="app">
<Header/>
<Body/>
</div>
  )
}
const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(<AppLayout/>);
