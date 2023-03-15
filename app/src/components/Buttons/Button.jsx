import { ArrowLineLeft, ArrowLineRight } from "../../assets/Icons";

export const StepPagination = ({
  labelLeft,
  onClickLeft,
  labelRight,
  onClickRight,
}) => {
  return (
    <>
      <button onClick={onClickLeft}>
        <ArrowLineLeft fillColor="#10494C" /> {labelLeft}
      </button>
      <button onClick={onClickRight}>
        {labelRight} <ArrowLineRight fillColor="#FFFFFF" />
      </button>
    </>
  );
};

export const PrimaryButton = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export const BackButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      <ArrowLineLeft fillColor="#10494C" /> {label}
    </button>
  );
};
