'use client'
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // import useRouter for navigating
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import FirstStep from "@/data/tasks/add-task-steps/first-step";
import SecondStep from "@/data/tasks/add-task-steps/second-step";
import ThiredStep from "@/data/tasks/add-task-steps/Thired-step";

export const useStepsDialog = ({
  title = "Add Items",
  onConfirm = () => {},
}) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("1"); // Default step is "1"
  const router = useRouter();
  const params = useSearchParams(); // To read the current search params

  // Update `step` from URL params when component mounts
  useEffect(() => {
    const currentStep = params.get("step") || "1"; // Default to "1" if step is not found
    setStep(currentStep);
  }, [params]);

  const handleOpen = () => {
    setOpen(true);
    // Update URL with `step=1` to ensure the dialog starts at the first step
    router.push(`${window.location.pathname}?step=1`, undefined, { shallow: true });
  };

  const handleClose = () => {
    setOpen(false);
    // Optionally, reset step to avoid URL pollution, or keep the current step
    router.push(window.location.pathname, undefined, { shallow: true });
  };

  const renderStepContent = () => {
    switch (step) {
      case "1":
        return <FirstStep />;
      case "2":
        return <SecondStep />;
      case "3":
        return <ThiredStep />;
      default:
        return <FirstStep />;
    }
  };

  const dialog = (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild >
      <div className="flex justify-end items-center mt-6 ">
          <Button
            variant="outline"
            className="rounded-full bg-primary text-[#fff] h-[39px] w-[39px] flex justify-center"
          >
            <Plus size={32} />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-primary text-lg font-medium">
            {title}
          </DialogTitle>
        </DialogHeader>
        {renderStepContent()}
      </DialogContent>
    </Dialog>
  );

  return [handleOpen, dialog];
};
