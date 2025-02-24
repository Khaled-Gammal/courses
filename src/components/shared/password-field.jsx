"use client";
import React, { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "../ui/label";

function PasswordField({
  label,
  placeholder,
  value,
  onChange,
  className,
  name,
  error,
  id,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const labelRef = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
      <div className="relative">
        <Input
          id={id}
          name={name}
          placeholder={placeholder}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`border rounded-[6px] w-full p-2 ${className}`}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 border-width-0"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {error && (
        <span className="text-red-800 text-xs font-normal">{error}</span>
      )}
    </div>
  );
}

export default PasswordField;
