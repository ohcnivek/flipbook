import { useEffect } from "react";

export const InputSlider = ({
  classes,
  label,
  onChange,
  onMouseUp,
  value,
  ...sliderProps
}) => {
  useEffect(() => {
    onChange(value);
  }, []);

  return (
    <div className="flex flex-col">
      <p className="text-sm">{label}</p>
      <input
        {...sliderProps}
        type="range"
        value={value}
        className={`slider ${classes}`}
        id="myRange"
        onChange={onChange}
        onMouseUp={onMouseUp}
      />
    </div>
  );
};
export default InputSlider;
