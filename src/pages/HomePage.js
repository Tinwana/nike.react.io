import Header from "../components/recyclecomponents/header";
import AutoSlide from "../components/homepagesection/autoslide";
import ShopPegasusLink from "../components/homepagesection/shoppegasuslink";
import PegasusHomePage from "../components/homepagesection/pegasusintroduce";
import SaleShoe from "../components/homepagesection/saleshoe";

export default function HomePage() {
    return (
        <>
        <Header />
        <AutoSlide />
        <ShopPegasusLink />
        <PegasusHomePage />
        <SaleShoe />
        </>
    )
}