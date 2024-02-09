//main Element bg-color: gray
//mainContainer Class bg-color: white
import HomeComponent from "./components/HomeComponent";
import random from "./random.js";

export default function Home() {
   random();
   
   return (
      <main>
         <div className="homeContainer">
            
               <HomeComponent />
               <p >Home Page</p>
            
         </div>
      </main>
   );
}
