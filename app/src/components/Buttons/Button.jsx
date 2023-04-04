import { ArrowLineLeft, ArrowLineRight } from "../../assets/Icons";
import "./Button.scss";

export const PrimaryBtn = ({ label, onClick, disabled }) => {
  return (
    <button className="PrimaryBtn" onClick={onClick} disabled={disabled}>
      <span>{label}</span>
    </button>
  );
};

export const PrimaryBtnWithRightArrow = ({ label, onClick, disabled }) => {
  return (
    <button
      className="PrimaryBtnWithArrow"
      onClick={onClick}
      disabled={disabled}
    >
      <span>{label}</span>
      <ArrowLineRight fillColor="#FFFFFF" className="-arrow-icon" />
    </button>
  );
};

export const PrimaryBtnWithLeftArrow = ({ label, onClick, disabled }) => {
  return (
    <button
      className="PrimaryBtnWithArrow"
      onClick={onClick}
      disabled={disabled}
    >
      <ArrowLineLeft fillColor="#FFFFFF" className="-arrow-icon" />
      <span>{label}</span>
    </button>
  );
};

export const PrimaryBtnOutline = ({ label, onClick, disabled }) => {
  return (
    <button className="PrimaryBtnOutline" onClick={onClick} disabled={disabled}>
      <span>{label}</span>
    </button>
  );
};

export const PrimaryBtnOutlineWithRightArrow = ({
  label,
  onClick,
  disabled,
}) => {
  return (
    <button
      className="PrimaryBtnOutlineWithArrow"
      onClick={onClick}
      disabled={disabled}
    >
      <span>{label}</span>
      <ArrowLineRight fillColor="#10494C" className="-arrow-icon" />
    </button>
  );
};

export const PrimaryBtnOutlineWithLeftArrow = ({
  label,
  onClick,
  disabled,
}) => {
  return (
    <button
      className="PrimaryBtnOutlineWithArrow"
      onClick={onClick}
      disabled={disabled}
    >
      <ArrowLineLeft fillColor="#10494C" className="-arrow-icon" />
      <span>{label}</span>
    </button>
  );
};

export const PrimaryBtnText = ({ label, onClick, disabled }) => {
  return (
    <button className="PrimaryBtnText" onClick={onClick} disabled={disabled}>
      <span>{label}</span>
    </button>
  );
};

export const PrimaryBtnTextWithRightArrow = ({ label, onClick, disabled }) => {
  return (
    <button
      className="PrimaryBtnTextWithArrow"
      onClick={onClick}
      disabled={disabled}
    >
      <span>{label}</span>
      <ArrowLineRight fillColor="#10494C" className="-arrow-icon" />
    </button>
  );
};

export const PrimaryBtnTextWithLeftArrow = ({ label, onClick, disabled }) => {
  return (
    <button
      className="PrimaryBtnTextWithArrow"
      onClick={onClick}
      disabled={disabled}
    >
      <ArrowLineLeft fillColor="#10494C" className="-arrow-icon" />
      <span>{label}</span>
    </button>
  );
};

export const PrimaryBtnWide = ({ label, onClick, disabled }) => {
  return (
    <button className="PrimaryBtnWide" onClick={onClick} disabled={disabled}>
      <span>{label}</span>
    </button>
  );
};

export const PrimaryBtnTextWide = ({ label, onClick, disabled }) => {
  return (
    <button
      className="PrimaryBtnTextWide"
      onClick={onClick}
      disabled={disabled}
    >
      <span>{label}</span>
    </button>
  );
};

export const PrimaryBtnOutlineWide = ({ label, onClick, disabled }) => {
  return (
    <button
      className="PrimaryBtnOutlineWide"
      onClick={onClick}
      disabled={disabled}
    >
      <span>{label}</span>
    </button>
  );
};

export const StepPagination = ({
  labelLeft,
  onClickLeft,
  labelRight,
  onClickRight,
}) => {
  return (
    <div className="StepPagination-btn">
      <PrimaryBtnTextWithLeftArrow label={labelLeft} onClick={onClickLeft} />
      <PrimaryBtnWithRightArrow label={labelRight} onClick={onClickRight} />
    </div>
  );
};
