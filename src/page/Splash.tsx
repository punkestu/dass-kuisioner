import { useState } from "react";
import Illustration1 from "../assets/components/ilus1.svg";
import bg1 from "../assets/components/bg1.svg";

export default function SplashPage() {
      const [isLoading, setIsLoading] = useState(true);
      const [detach, setDetach] = useState(false);
      setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
                  setDetach(true);
            }, 900);
      }, 3000);
      return detach ? <></> : (
            <section id="splash" className={`bg-white absolute w-screen h-screen top-0 left-0 flex flex-col justify-center items-center gap-4`}>
                  <img src={bg1} alt="" className={`absolute w-screen h-screen object-cover z-20 ${isLoading ? "" : "animate-fadeOut"}`} />
                  <img src={Illustration1} alt="illustration 1" className={`w-1/2 z-30 ${isLoading ? "" : "animate-fadeOut"}`} />
            </section>
      )
}