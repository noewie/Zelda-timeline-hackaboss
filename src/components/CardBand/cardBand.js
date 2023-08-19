import "./cardBandStyle.css";

export const CardBand = ({ condition, className, children }) => {
  return (
    <>{condition && <p className={`cardBand ${className}`}>{children}</p>}</>
  );
};
