import React, {createContext, useState} from "react"

import GDragonxNikeAirForce1 from "../assets/GDragonxNikeAirForce1.jpg"
import OffWhiteBlueTapeArrowsHoodie from "../assets/OffWhiteBlueTapeArrowsHoodie.jpg"
import VersacePourHomme from "../assets/VersacePourHomme.jpg"
import PumaCoreBaseBag from "../assets/PumaCoreBaseBag.jpg"
import NikeAppleWatchSeries6 from "../assets/NikeAppleWatchSeries6.jpg"
import DarkGreyCorduroyCargoPants from "../assets/Dark-Grey Corduroy Cargo Pants.jpg"

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState([
        {id: 1, name: 'GDragon x Nike Air Force1' , price: 300, image: GDragonxNikeAirForce1, status: 'trending'},
        {id: 2, name: 'OffWhite Blue Tape Arrows Hoodie' , price: 200, image: OffWhiteBlueTapeArrowsHoodie, status: 'trending'},
        {id: 3, name: 'Versace Pour Homme' , price: 500, image: VersacePourHomme, status: 'trending'},
        {id: 4, name: 'Puma Core Base Bag' , price: 350, image: PumaCoreBaseBag, status: 'trending'},
        {id: 5, name: 'Nike Apple WatchSeries6' , price: 250, image: NikeAppleWatchSeries6, status: 'trending'},
        {id: 6, name: 'Dark Grey CorduroyCargoPant' , price: 150, image: DarkGreyCorduroyCargoPants, status: 'trending'} 
   ]);

        return(
            <ProductsContext.Provider value={{products:  [...products]}}>
                {props.children}
            </ProductsContext.Provider>

         )

}

export default ProductsContextProvider;