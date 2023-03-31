import { FormControl } from "@mui/material";
import "./FilterSelect.scss";
import { ArrowLineDown } from "../../assets/Icons";
import { NEUTRAL_GREY_DARK_2 } from "../../utils/Constants";

const FilterSelect = (props) => {
  const { id, defaultValue, onChangeFunc, option } = props;

  return (
    <FormControl fullWidth>
      <section className="Filter-select-container">
        <select
          id={id}
          value={defaultValue}
          onChange={onChangeFunc}
          className="Filter-select"
        >
          {option.map((item) => (
            <option key={item} value={item} className="Filter-select-text">
              {item}
            </option>
          ))}
        </select>
        <ArrowLineDown fillColor={NEUTRAL_GREY_DARK_2} width={20} height={12} />
      </section>
    </FormControl>
  );
};

export default FilterSelect;
