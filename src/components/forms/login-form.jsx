"use client";

import { handleLogin } from "@/lib/actions";
import InputField from "../shared/input-field";
import PasswordField from "../shared/password-field";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useReducer } from "react";
import { validate } from "@/lib/validation";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const initialValues = {
  email: "",
  password: "",
  loading: false,
  errors: {
    email: "",
    password: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "errors":
      return { ...state, errors: { ...state.errors, ...action.payload } };
    case "loading":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export default function LoginForm() {
  const router=useRouter();
  const [state, dispatch] = useReducer(reducer, initialValues);
  const schema = {
    email: {
      required: true,
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    password: { required: true },
  };
  async function handleSubmit(event) {
    event.preventDefault();
    const { valid, errors } = validate(state, schema); // Use the validate function
    if (!valid) {
      // Handle validation errors
      dispatch({ type: "errors", payload: errors });
      return;
    }
  
    try {
      
      const loadingId=toast.loading("Please wait...");
      dispatch({ type: "loading", payload: true });
      const { email, password } = state;
      const response = await handleLogin({ email, password });
      if ( response.status === 200) {
        // Handle successful login
         toast.success(response.success);  // Display success message
         window.location.href = "/";
      } else if (response.status === 400) {
        // Handle server validation error
        dispatch({ type: "errors", payload: { password: response.message } });
        toast.error(response.message);
      } else {
        // Handle any other errors
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      dispatch({ type: "loading", payload: false });
      toast.dismiss(loadingId)
    }
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-6 w-full px-4"
    >
      <InputField
        name="email"
        type="text"
        label="Email Address"
        placeholder="Enter your email"
        className={"w-full md:w-[492px]"}
        value={state.email}
        onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
        error={state.errors.email}
      />
      <PasswordField
        name="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
        className={"w-full md:w-[492px]"}
        value={state.password}
        onChange={(e) =>
          dispatch({ type: "password", payload: e.target.value })
        }
        error={state.errors.password}
      />
      <Button
        className="mt-4 md:w-[310px] sm:w-[50%]"
        type="submit"
        disabled={state?.loading}
      >
        {state?.loading ? (
          <>
            <Loader2 className="animate-spin" />
            Please wait...
          </>
        ) : (
          "Login"
        )}
      </Button>
    </form>
  );
}
