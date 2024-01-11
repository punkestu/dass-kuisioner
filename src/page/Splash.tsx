import { useState } from "react";
import Illustration1 from "../assets/illustration1.png";

export default function SplashPage() {
      const [isLoading, setIsLoading] = useState(true);
      const [detach, setDetach] = useState(false);
      setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
                  setDetach(true);
            }, 900);
      }, 2000);
      return detach ? <></> : (
            <section id="splash" className={`bg-blue-500 absolute w-screen h-screen top-0 left-0 flex flex-col justify-center items-center gap-4 ${isLoading ? "" : "animate-fadeOut"}`}>
                  <img src={Illustration1} alt="illustration 1" className="w-1/2" />
                  <h1 className="text-white font-bold text-4xl">RULESS</h1>
            </section>
      )
}