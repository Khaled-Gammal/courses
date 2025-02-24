'use client';
import { useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

function InputField({
  label,
  placeholder,
  type,
  value,
  onChange,
  className,
  error,
  name,
  disabled=false,
  id,
}) {
  const labelRef = useRef(null);

  const handleFocus = () => {
    if (labelRef.current) {
      labelRef.current.classList.add("text-primary");
    }
  };

  const handleBlur = () => {
    if (labelRef.current) {
      labelRef.current.classList.remove("text-primary");
    }
  };

  return (
    <div className={className}>
      <Label
        ref={labelRef}
        htmlFor={id}
        className={`text-sm font-normal ${error ? "text-red-800" : "text-gray-400"}`}
      >
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`border rounded-[6px] p-2 ${className} ${
          error ? "border-red-800" : "border"
        } focus:border-primary`}
      />
      {error && <span className="text-red-800 text-xs font-normal">{error}</span>}
    </div>
  );
}

export default InputField;