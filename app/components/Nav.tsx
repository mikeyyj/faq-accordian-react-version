import Link from "next/link";

function Nav() {
   return (
      <div className="mainNav">
         <div className="logoContainer">
            <h1>MJNY APP</h1>
         </div>
         <div className="navContainer">
            <nav className="topNav">
               <div className="topics">
                  
                     <Link href="/">
                        <div className="topic">Home</div>
                     </Link>
                  
                  
                     <Link href="/faq">
                        <div className="topic">FAQ</div>
                     </Link>
                  
               </div>
            </nav>
         </div>
      </div>
   );
}

export default Nav;
