import clsx from "clsx";

import styles from "./header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="">
        <nav
          className={clsx(
            styles.brandNavbarHelp,
            "container-fluid",
            "d-flex justify-content-between",
            "align-items-center"
          )}
        >
          <div className={clsx(styles.brandImg)}>
            <a href="/" className="link-dark">
              <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path>
              </svg>
            </a>
          </div>
          <div className={clsx(styles.brandNavbar)}>
            <ul
              className={clsx(
                "d-flex",
                "justify-content-between",
                "align-items-center",
                "gap-2"
              )}
            >
              <li className="list-unstyled  p-2">
                <a
                  className="link-dark text-decoration-none "
                  href="https://www.nike.com/vn/retail"
                >
                  Find a Store
                </a>
              </li>
              <span
                className={clsx(
                  styles.line,
                  "border-1",
                  "border-end",
                  "border-dark"
                )}
              ></span>
              <li className="list-unstyled  p-2">
                <a
                  className="link-dark text-decoration-none "
                  href="https://www.nike.com/vn/help"
                >
                  Help
                </a>
              </li>
              <span
                className={clsx(
                  styles.line,
                  "border-1",
                  "border-end",
                  "border-dark"
                )}
              ></span>
              <li className="list-unstyled  p-2">
                <a
                  className="link-dark text-decoration-none "
                  href="https://www.nike.com/vn/membership"
                >
                  Join Us
                </a>
              </li>
              <span
                className={clsx(
                  styles.line,
                  "border-1",
                  "border-end",
                  "border-dark"
                )}
              ></span>
              <li className="list-unstyled  p-2">
                <a
                  className="link-dark text-decoration-none "
                  href="https://www.nike.com/vn/member/profile/login?continueUrl=https://www.nike.com/vn/"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav
          className={clsx(
            styles.logoNavbarFeature,
            "container-fluid",
            "d-flex",
            "justify-content-between",
            "align-items-center"
          )}
        >
          <div className={clsx(styles.navbarLogo)}>
            <a href="/" className="link-dark">
              <svg
                aria-hidden="true"
                className="pre-logo-svg"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="78px"
                height="78px"
                fill="none"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className={clsx(styles.navbarFeature)}>
         <ul className={clsx(styles.navbarFeatureContent)}>
             <li className="list-unstyled d-flex flex-column">
                 <a href="/" className="link-dark text-decoration-none">New & Featured</a>
             </li>
             <li className="list-unstyled d-flex flex-column">
                 <a href="/" className="link-dark text-decoration-none">Men</a>
             </li>
             <li className="list-unstyled d-flex flex-column">
                 <a href="/" className="link-dark text-decoration-none">Women</a>
             </li>
             <li className="list-unstyled d-flex flex-column">
                 <a href="/" className="link-dark text-decoration-none">Kids</a>
             </li>
             <li className="list-unstyled d-flex flex-column">
                 <a href="/" className="link-dark text-decoration-none">Sale</a>
             </li>
             <li className="list-unstyled d-flex flex-column">
                 <Link to='/Srkns' className="link-dark text-decoration-none">SNKRS</Link>
             </li>
         </ul>
     </div>
     <div className={clsx(styles.navbarSearch)}>
            <div className={clsx(styles.searchGroup)}>
              <div className={clsx(styles.searchIcon)}>
              <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
              </div>
             <input type="text" className={clsx(styles.searchInput)} placeholder="Search" />
            </div>
            <div className={clsx(styles.featureIcon)}>
             <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
         </div>
         <div className={clsx(styles.featureIcon)}>
             <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
         </div>
         <div className={clsx(styles.featureIcon)}>
             <i className="fa-solid fa-bars"></i>
         </div>
     </div>
        </nav>
      </header>
    </>
  );
}
