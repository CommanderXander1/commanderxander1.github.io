import { useState } from "react";

const ExpandCard = ({ c }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-black/40 shadow-xl border-3 border-transparent hover:border-white text-white overflow-hidden cursor-pointer transition-all duration-300"
    >
      <div className="flex items-center p-2">
        <img className="p-1" src={c.img} width={80} height={80} />
        <div className="flex flex-col">
          <p className="pl-4 text-3xl text-shadow-lg">{c.title}</p>
          <p className="pl-4 text-xl text-shadow-lg">{c.subtitle}</p>
        </div>

        <span
          className={`ml-auto mr-3 mt-8 text-xl transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </div>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 text-xl text-shadow-lg">
            { c.content }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandCard