import { ArrowLineLeft, ArrowLineRight } from "../../assets/Icons";
import "./Button.scss";

export const StepPagination = ({
  labelLeft,
  onClickLeft,
  labelRight,
  onClickRight,
}) => {
  return (
    <>
      <button className="StepPagenation-Back" onClick={onClickLeft}>
        <ArrowLineLeft fillColor="#10494C" /> {labelLeft}
      </button>
      <button className="StepPagenation-Next" onClick={onClickRight}>
        {labelRight} <ArrowLineRight fillColor="#FFFFFF" />
      </button>
    </>
  );
};

export const PrimaryButton = ({ label, onClick }) => {
  return <button className="PrimaryButton" onClick={onClick}>{label}</button>;
};

export const BackButton = ({ label, onClick }) => {
  return (
    <button className="BackButton" onClick={onClick}>
      <ArrowLineLeft fillColor="#10494C" /> {label}
    </button>
  );
};
