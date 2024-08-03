import { useRef } from "react";

const CardsContainer = () => {
  const parentContainer = useRef(null);

  return (
    <div
      ref={parentContainer}
      className="parentContainer flex flex-row gap-5 *:bg-gray-400/20 *:px-20 *:py-10 *:text-6xl *:w-[550px] *:h-[400px] *:font-bold *:flex *:items-center *:justify-center"
    >
      <div className="containers">のすべて</div>
      <div className="containers">鉴于对人</div>
      <div className="containers">우호관계</div>
    </div>
  );
};

export default CardsContainer;
