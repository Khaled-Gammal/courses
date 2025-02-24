"use client";

import * as React from "react";
import { format, parseISO } from "date-fns"; // Added parseISO for string-to-Date conversion
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "../ui/label";

export function DatePickerDemo({
  label = "",
  placeholder = "Pick a date",
  value,
  onChange,
  disabled = false,
  id,
}) {
  // Ensure `value` is a Date object for the Calendar
  const selectedDate = value ? parseISO(value) : undefined;

  const handleChange = (date) => {
    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd");
      onChange(formattedDate); // Pass formatted string to parent
    }
  };

  return (
    <div className="w-full">
      {label && (
        <Label htmlFor={id} className="text-sm font-light text-gray-400">
          {label}
        </Label>
      )}

      <Dialog className="w-full">
        <DialogTrigger asChild>
          <Button
            disabled={disabled}
            variant={"outline"}
            className={cn(
              "w-full justify-between text-left font-normal",
              !value && "text-muted-foreground"
            )}
          >
            {value || <span>{placeholder}</span>}
            <CalendarIcon className="mr-2 h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-auto p-4">
          <Calendar
            disabled={disabled}
            mode="single"
            selected={selectedDate} // Pass Date object to Calendar
            onSelect={handleChange} // Handle date selection
            initialFocus
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
