import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import Shop from "../components/shops/Shop"
import Wrapper from "../components/wrapper/Wrapper"
import Gallery from "../components/Gallery/Gallery"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <Gallery/>
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Wrapper />
   
    </>
  )
}

export default Pages
