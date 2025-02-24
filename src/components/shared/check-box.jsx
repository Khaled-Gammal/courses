"use client"

import { Checkbox } from "@/components/ui/checkbox"

export function CheckBox({
    id,
    label,
    value=false,
    onChange,
    error,
    disabled = false,
    ...props
}) {
  return (
    <div className="flex items-center space-x-2 justify-start">
      <Checkbox id={id}
      checked={value}
      onCheckedChange={onChange}
        disabled={disabled}
        
      />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      {error && (
        <p className="text-red-800 text-sm font-normal">{error}</p>
      )}
    </div>
  )
}