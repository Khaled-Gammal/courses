"use client";

import { useAddDialog } from "@/hooks/custom-dialog";
import { handleDeleteRow } from "@/lib/actions/delete-server";
import { useConfirmMessage } from "@/hooks/delete-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { handlePostInServer } from "@/lib/actions/post-server";
import { toast } from "sonner";
import { handleUpdateInServer } from "@/lib/actions/patch-server";
import { compareData } from "@/lib/utils";
import { DataTableDemo } from "@/components/shared/table-data";
import  card  from '@/style/card.module.css';
import  typography  from '@/style/typography.module.css';
import { addTrainerFields, columns, editTrainerFields, trainerData, viewTrainerFields } from "./constant-data";
import { useViewDialog } from "@/hooks/custom-view-dialog";

function TrainersDataTable() {

 
   // add Trainer dialog
   const [handleAddTrainer, addTrainerConfirmDialog] = useAddDialog({
     onConfirm: (state) => handleAddNewTrainer(state),
    title: "Add a New Trainer",
    fields: addTrainerFields,
  });

  // edit Trainer  dialog
  const [handleEditTrainer, editTrainerConfirmDialog] = useEditDialog({
    onConfirm: (state) => handleEdit(state),
    title: "Edit Trainer",
    fields: editTrainerFields,
  });


  // delete Trainer dialog
  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm: (row) => handleDeleteRow("/dashboard/Trainers/",row?.id,"/Trainers"),
    text: "Do you sure you wanna to delete this Trainer ? ",
    title: "Delete Trainer",
  });

   // view trainer details dialog
   const [handleViewTrainer, viewTrainerConfirmDialog] = useViewDialog({
    title: "Trainer's Details",
    fields: viewTrainerFields,
  });

  // handle add function
  const handleAddNewTrainer = async(state) => {
    
    try {
      const formData = new FormData();
      // Append all keys of state to data except 'loading' and 'error'
      Object.keys(state).forEach(key => {
        if (key !== 'loading' && key !== 'error') {
          formData.append(key, state[key]);
        }
      });
     
      const response = await handlePostInServer(
        "/dashboard/Trainers/create-Trainer/",
        formData,
        "/Trainers",
        false,
        "formData"
      );
      console.log(response);
      if (response.success) {
        toast.success(response.success);
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      console.error("Error adding section:", error);
      toast.error("Error adding section");
    }
  
  }

   // handle edit function
   const handleEdit = (state) => {
    try {
      TrainersData.forEach(async (row) => {
        if (row.id === state.id) {
          const changes = compareData(row, state);
          if (Object.keys(changes).length > 0) {
            console.log("changes=>", changes);
            // Call the API to update the student
            const formData=changes
            const response = await handleUpdateInServer(
              `/dashboard/Trainers/${row?.id}/`,
              "PATCH",
              formData,
              true,
              "object",
              "/Trainers"
            );
            if (response.success) {
            toast.success(response.success);
            }else {
              toast.error(response.error);
            }
          }
        }
      });
    } catch (error) {
      console.error("Error updating instructor:", error);
    }
  }

  return (
   <div className={card['main-card']}>
         <div className="flex justify-between mb-[19px]">
         <h1 className={typography["main-text"]}>Payment Management</h1>
         <div className="flex justify-end mb-[19px] gap-4">
           
          {addTrainerConfirmDialog}
           </div>
         </div>
         <DataTableDemo data={trainerData} columns={columns} isPending={false} 
          onDelete={handleDelete}
          onEdit={handleEditTrainer}
          onView={handleViewTrainer}
         />
        {deleteComponentConfirmDialog}
        {editTrainerConfirmDialog}
        {viewTrainerConfirmDialog}
       </div>
  );
}

export default TrainersDataTable;
