import { optionsButtom } from "./OptionsButtom.module.css";

export default function OptionsButton({ handlers, children, type }) {
  return (
    <button className={optionsButtom} onClick={() => handlers(type)}>
      {children}
    </button>
  );
}