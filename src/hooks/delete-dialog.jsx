'use client';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import deleteIcon from "@/assets/icons/delete.png";
import Image from "next/image";
import { toast } from "sonner";

export const useConfirmMessage = ({
  onConfirm = () => {},
  title = "Delete Items",
  text = "Do you sure you wanna to delete this item ? ",
  successMessage = "Item deleted successfully",
}) => {
  const [open, setOpen] = useState(false);
  const [args, setArgs] = useState(null);

  const handleOpen = (...params) => {
    setArgs([...params]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const viewMessage = (message) => {
    toast.success(message||successMessage);
    
  }
  const dialog = (
    <Dialog open={open} onClose={handleClose} >
      <DialogContent className="md:w-[549px] w-full px-[60px] py-[24px] gap-[59px]" >
        <DialogHeader className={'gap-[22px]'} asChild>
          <DialogTitle className="flex flex-row items-center justify-center gap-1">
            <Image src={deleteIcon} alt="delete" />
            <h1 className="header-title">{title}</h1>
            </DialogTitle>
          <DialogDescription className="sub-title-gray text-center" >{text}</DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex items-center justify-between gap-6 md:gap-[60px] '>
          
          <Button 
          className={'cancel-button w-full'}
          variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button
          className={'confirm-button w-full'}
            type="submit"
            onClick={() => {
              onConfirm(...args)
                .then((res) => {
                  viewMessage(res?.deails || successMessage);
                })
                .catch((err) => {
                  viewMessage(err?.error);
                });
              handleClose();
            }}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  return [handleOpen, dialog];
};
