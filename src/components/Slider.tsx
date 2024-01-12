import React, { useState } from "react";
import ArrowUp from "../assets/components/arrow_up.svg";

export default function Slider(opt: {
      children: React.ReactNode
}) {
      const [state, setState] = useState(false);
      return (
            <div className="sticky bottom-0 flex flex-col gap-4 z-10 w-screen bg-gray bg-opacity-25 backdrop-blur-md px-8 py-2 border-t-4 border-pink">
                  <button className={`flex justify-center`} onClick={() => { setState(!state) }}>
                        <img src={ArrowUp} alt="arrow up" className={`w-1/6 ${state && "rotate-180"}`} />
                  </button>
                  {state && opt.children}
            </div>
      );
}  