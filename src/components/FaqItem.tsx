import { IconPlus, IconMinus} from "../components/Icon"

interface Props {
    isOpen: boolean
    setIsOpen(value: boolean): void
    title: string
    description: string
    id: string
}

function FaqItem(props: Props) {
    const toggleAccordion = () => {
        props.setIsOpen(props.isOpen);
      };
  return (
    <div>
      <details
        className={`open:bg-white open:shadow-lg p-6 rounded-lg border-b ${
          props.isOpen ? "open" : ""
        }`}
        open={!props.isOpen}
        onClick={() => props.setIsOpen(!props.isOpen)}
      >
        <summary className="text-sm leading-6 pr-3 hover:text-textColorHover hover:font-bold text-slate-900 dark:text-white font-semibold select-none flex items-center space-x-2 cursor-pointer">
          {props.title}
          <span className="ml-2 absolute right-0" onClick={(e) => {
          e.stopPropagation();
          toggleAccordion();
        }}>{props.isOpen ? <IconPlus /> : <IconMinus />}</span>
        </summary>
        <div className="mt-3 text-sm leading-6 text-textColor">
          <p>
            {props.description}
          </p>
        </div>
      </details>
    </div>
  );
}

export default FaqItem;
