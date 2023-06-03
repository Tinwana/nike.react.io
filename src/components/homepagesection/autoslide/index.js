import clsx from "clsx";
import { useEffect } from "react";
import styles from "./slide.module.scss";
export default function AutoSlide() {
  let slidePosition = 0
    useEffect(()=> {
      const autoSlideInterval = setInterval(autoShowSlide,2000)
      return () => {
        clearInterval(autoSlideInterval)
      }
    })
    const autoShowSlide = ()=> {

    const autoSlide = document.querySelectorAll(`.${styles.slideTextContent}`);
    for (let i = 0; i< autoSlide.length;i++) {
        autoSlide[i].style.display="none";
    }
    slidePosition++;
    if(slidePosition > autoSlide.length-1){
      slidePosition = 0;
    }
    autoSlide[slidePosition].style.display="block";
    } 
    
  return (
    <>
      <div className={clsx(styles.slideText)}>
        <div className={clsx(styles.slideTextContent,styles.showUp)}>
          <h1>Hello Nike App</h1>
          <p>
            Download the app to access everything Nike.{" "}
            <a href="https://nike.sng.link/Astn5/4etf/8h7o">Get Your Great</a>
          </p>
        </div>
        <div className={clsx(styles.slideTextContent)}>
          <h1>New Styles on Sale: Up to 40% Off</h1>
          <p>
            <a href="https://www.nike.com/vn/w/sale-3yaep">
              Shop All Our New Markdowns
            </a>
          </p>
        </div>
        <div className={clsx(styles.slideTextContent)}>
          <h1>Free Delivery</h1>
          <p>
            Applies to orders of 5.000.000₫ or more.{" "}
            <a href="https://www.nike.com/vn/help/a/shipping-delivery-gs">
              View details
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
