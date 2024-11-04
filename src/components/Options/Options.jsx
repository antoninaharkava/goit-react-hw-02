import OptionsButtom from "./OptionsButtom.jsx";

import css from "./Options.module.css";

export default function Options({ handler, reset, total }) {
  return (
    <div className={css.options}>
      <OptionsButtom handlers={handler} type="good">
        Good 
      </OptionsButtom>
      <OptionsButtom handlers={handler} type="neutral">
        Neutral {" "}
      </OptionsButtom>
      <OptionsButtom handlers={handler} type="bad">
        Bad 
      </OptionsButtom>
      { total > 0 && <OptionsButtom handlers={reset}>Reset</OptionsButtom>  }
    </div>
  );
};