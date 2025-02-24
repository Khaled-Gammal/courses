'use client';
import { CheckBox } from "@/components/shared/check-box";
import { DatePickerDemo } from "@/components/shared/date-picker";
import DragFile from "@/components/shared/drag-file";
import ImagePicker from "@/components/shared/image-picker";
import InputField from "@/components/shared/input-field";
import { PhoneInput } from "@/components/shared/phone-number";
import SelectField from "@/components/shared/select-field";
import TextAreaField from "@/components/shared/text-area";
import { TimePickerDemo } from "@/components/shared/time-picker";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { validate } from "@/lib/validation";
import { Loader2, Plus } from "lucide-react";
import { useReducer, useState } from "react";
import button from "@/style/button.module.css";
const initialValues = {
  loading: false,
  error: {}, // Error state initialized as an empty object
  // Initialize with empty values for dynamic fields
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true, error: {} }; // Clear errors on loading
    case "error":
      return { ...state, loading: false, error: action.payload };
    case "success":
      return { ...state, loading: false, error: {} }; // Clear errors on success
    case "values":
      return { 
        ...state, 
        ...action.payload,
        error: { 
          ...state.error, 
          ...Object.keys(action.payload).reduce((acc, key) => {
            acc[key] = ""; // Reset error for the changed value
            return acc;
          }, {})
        }
      }; // Merge new values with the existing state and reset errors
    default:
      return state;
  }
};

export const useAddDialog = ({
  title = "Add Items",
  fields,
  className,
  onConfirm = () => {},
}) => {
  const [args, setArgs] = useState(null);
  const handleOpen = (...params) => {
    setArgs([...params]);
  };

  const [state, dispatch] = useReducer(reducer, initialValues);

  // Dynamically generate the validation schema for each field
  const schema = fields?.reduce(
    (acc, field) => ({
      ...acc,
      [field.name]: { required: field.required },
    }),
    {}
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate state against the schema
    const { valid, errors } = validate(state, schema);
    if (!valid) {
      dispatch({ type: "error", payload: errors }); // Set errors in state
      return;
    }
    dispatch({ type: "loading",payload:true }); // Show loading state during submission
    try {
     onConfirm(state,dispatch); // Call onConfirm callback with form values
    } catch (error) {
      dispatch({ type: "error", payload: { error: error.message||args } }); // Handle error state
    } finally {
      dispatch({ type: "success" }); // Clear error state on success
     
    }
  };
const handleClearData=()=>{
  dispatch({type:"values",payload:
  fields?.reduce(
    (acc, field) => ({
      ...acc,
      [field.name]: ""
    }),
    {}
  )
  })
}
  const dialog = (
    <Dialog className='overflow-y-auto' >
      <DialogTrigger asChild className="">
        <div className="flex justify-end items-center ">
          <Button
           
            className={`rounded-[6px] bg-primary text-[#fff] h-[39px] w-[119px] flex justify-center  hover:bg-primary ${className}`}
          >
           
            <Plus size={32} />
            <span className="ml-2">Add</span>
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] overflow-y-auto max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-center text-primary text-lg font-medium">
            {title}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center gap-4 pt-[35px] pb-[29px]">
            {fields?.map((field,index) =>
              field.type === "image" ? (
                <div className="mb-2" key={index}>
                  <ImagePicker
                    value={state[field.name]}
                    error={state.error[field.name]}
                    onChange={(value) => {
                      console.log("value=>", value);
                      dispatch({
                        type: "values",
                        payload: { [field.name]: value },
                      });
                    }}
                  />
                </div>
              ) : field.type === "selected" ? (
                <SelectField
                  name={field.name}
                  id={field.id}
                  label={field.label}
                  placeholder={field.placeholder}
                  error={state.error[field.name]} // Display individual field error
                  path={field.path}
                  view={field.view}
                  renderValue={field.renderValue}
                  value={state[field.name] || ""}
                  options={field.options}
                  onChange={(value) => {
                    dispatch({
                      type: "values",
                      payload: { [field.name]: value },
                    });
                  }}
                />
              ) : field.type === "date" ? (
                <DatePickerDemo
                  id={field.id}
                  label={field.label}
                  placeholder={field.placeholder}
                  value={state[field.name]}
                  error={state.error[field.name]} // Display individual field error
                  onChange={(value) => {
                    dispatch({
                      type: "values",
                      payload: { [field.name]: value },
                    });
                  }}
                />
              ) : field.type === "time" ? (
                <TimePickerDemo
                  id={field.id}
                  label={field.label}
                  placeholder={field.placeholder}
                  value={state[field.name]}
                  onChange={(value) => {
                    dispatch({
                      type: "values",
                      payload: { [field.name]: value },
                    });
                  }}
                />
              ) : field.type === "description" ? (
                <div className=" w-full" key={field.id}>
                  <TextAreaField
                    name={field.name}
                    id={field.id}
                    label={field.label}
                    placeholder={field.placeholder}
                    error={state.error[field.name]} // Display individual field error
                    value={state[field.name] || ""}
                    onChange={(e) => {
                      dispatch({
                        type: "values",
                        payload: { [field.name]: e.target.value },
                      });
                    }}
                  />
                </div>
              ) : field.type === "file" ? (
                <DragFile
                  id={field.id}
                  label={field.label}
                  name={field.name}
                  type={field.upload}
                  value={state[field.name]}
                  error={state.error[field.name]} // Display individual field error
                  onChange={(value) => {
                    dispatch({
                      type: "values",
                      payload: { [field.name]: value },
                    });
                  }}
                />
              ) : field.type === "phone" ? (
                <PhoneInput
                  name={field.name}
                  id={field.id}
                  label={field.label}
                  placeholder={field.placeholder}
                  value={state[field.name]}
                  error={state.error[field.name]} 
                  onChange={(value) => {
                    dispatch({
                      type: "values",
                      payload: { [field.name]: value },
                    });
                  }}
                />
              ) :field.type==="checkbox"?(
                <div className="w-full">
                <CheckBox
                id={field.id}
                label={field.label}
                value={state[field.name]}
                onChange={(value) => {
                  dispatch({
                    type: "values",
                    payload: { [field.name]: value },
                  });
                }}
                error={state.error[field.name]}
                required={field.required}

                />
                </div>
              ): (
                <div className="w-full" key={field.id}>
                  <InputField
                    name={field.name}
                    type={field.type}
                    id={field.id}
                    label={field.label}
                    placeholder={field.placeholder}
                    required={field.required}
                    error={state.error[field.name]} // Display individual field error
                    value={state[field.name] || ""}
                    onChange={(e) => {
                      dispatch({
                        type: "values",
                        payload: { [field.name]: e.target.value },
                      });
                    }}
                  />
                </div>
              )
            )}
          </div>
          <DialogFooter className="flex items-center justify-between gap-6 md:gap-[60px] ">
            <DialogClose asChild>
              <Button className={"cancel-button w-full"} variant="outline" onClick={handleClearData}>
                Cancel
              </Button>
            </DialogClose>
            <Button
              className={`${button["confirm-button"]} w-full`}
              type="submit"
              disabled={state?.loading}
            >
              {state?.loading ? (
                <>
                  <Loader2 className="animate-spin" />
                  Please wait...
                </>
              ) : (
                "Add"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );

  return [handleOpen, dialog];
};