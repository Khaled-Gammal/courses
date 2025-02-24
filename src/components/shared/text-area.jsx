import React from 'react'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

export default function TextAreaField({
    label,
    placeholder="Type your message here.",
    value,
    onChange,
    className,
    error,
    name,
    disabled=false,
}) {
  return (
    <div className={className}>
      <Label className="text-[14px] font-light text-gray-400">{label}</Label>
      <Textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`border  rounded-[6px]  p-2 h-[71px] resize-none ${className} ${
          error ? "border-red-500" : "border"
        }`}
      />
      {error && (
        <span className="text-red-500 text-[12px] pt-1 m-0">{error}</span>
      )}
    </div>
  )
}
