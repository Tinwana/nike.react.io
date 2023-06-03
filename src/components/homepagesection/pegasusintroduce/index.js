import clsx from 'clsx';
import styles from './style.module.scss'


export default function PegasusHomePage() {


    return(
        <section className="container-fluid mb-5">
 <p className="fs-3">Welcome to Pegasus Shop</p>
 <div className="row gy-3">
     <div className="col-lg-4 col-12 gy-md-3">
         <div className={clsx(styles.pegasusImg)}>
             <img className="w-100 rounded-1" src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_500,c_limit/1926120e-0327-42e2-82bf-cb2f0deb3cb4/nike-just-do-it.jpg" alt="" />
             <button className={clsx(styles.pegasusBtn, 'btn' ,'btn-light' ,'rounded-5' ,'px-3')}>Women's</button>
         </div>
     </div>
     <div className="col-lg-4 col-12 gy-md-3">
         <div className={clsx(styles.pegasusImg)}>
             <img className="w-100 rounded-1" src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_500,c_limit/72f95063-c6b8-4309-a152-5b8ce04d11ce/nike-just-do-it.jpg" alt="" />
             <button className={clsx(styles.pegasusBtn, 'btn' ,'btn-light' ,'rounded-5' ,'px-3')}>Kid's</button>
         </div>
     </div>
     <div className="col-lg-4 col-12 gy-md-3">
         <div className={clsx(styles.pegasusImg)}>
             <img className="w-100 rounded-1" src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_500,c_limit/6a6914cd-3712-4e7e-85f8-a8fd01288248/nike-just-do-it.jpg" alt="" />
             <button className={clsx(styles.pegasusBtn, 'btn' ,'btn-light' ,'rounded-5' ,'px-3')}>Men's</button>
         </div>
     </div>
 </div>
</section>
    );
}