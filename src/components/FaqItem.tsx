import { useState } from "react";
import { IconPlus, IconMinus } from "../components/Icon";

interface Props {
  title: string;
  description: string;
}

function FaqItem(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className=" open:bg-white open:shadow-lg p-6 rounded-lg border-b">
        <button
          onClick={handleToggle}
          className="hover:text-textColorHover hover:font-bold text-lg leading-6 pr-3 font-semibold flex items-center"
        >
          {props.title}
          <span className=" absolute right-0 ">
            {!isOpen ? <IconPlus /> : <IconMinus />}
          </span>
        </button>
        {isOpen && (
          <p className=" block pt-5 text-sm leading-6 text-textColor">
            {props.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default FaqItem;
