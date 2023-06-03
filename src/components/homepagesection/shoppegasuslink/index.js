
import { Link } from "react-router-dom";


export default function ShopPegasusLink() {

    function rand (num) {
        return Math.floor(Math.random()*num);
    }
const headerImg = ["https://c4.wallpaperflare.com/wallpaper/22/55/717/sport-running-nike-run-wallpaper-preview.jpg","https://i.pinimg.com/originals/e6/c0/f2/e6c0f2659987c8b796e965a1721653c1.jpg","https://static.nike.com/a/images/w_1920,c_limit/a775a4df-d252-4fcd-a951-ce20ebfee3ac/what-to-wear-for-cold-weather-running.jpg"]

return (
    <Link
      to='/ShopPegasus'
      className="w-100 d-inline-block link-dark text-decoration-none"
    >
      <img src={`${headerImg[rand(3)]}`} alt={'anh nen'} className="img-fluid w-100" />
      <div className="d-flex flex-column align-items-center mt-5 mb-5">
        <p className="text-dark fw-normal fs-5">Nike Pegasus 40</p>
        <p className="fw-bold fs-1">THE WORLD RUNS PEGASUS.</p>
        <p>
          Meet the lasted updated to the shoe that's been trusted by runners of
          all kinds for four decays
        </p>
        <button className="btn btn-dark rounded-5 px-4">Shop</button>
      </div>
    </Link>
  );
}
