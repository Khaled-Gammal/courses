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
import { useState } from "react";

function TrainersDataTable() {

  const [trainers,setTrainers]=useState( trainerData);
   // add Trainer dialog
   const [handleAddTrainer, addTrainerConfirmDialog] = useAddDialog({
     onConfirm: (state,dispatch) => handleAddNewTrainer(state,dispatch),
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
    onConfirm: (row) => handleDeleteRow(row?.full_name),
    text: "Do you sure you wanna to delete this Trainer ? ",
    title: "Delete Trainer",
  });

  // handle delete function
  const handleDeleteRow=(full_name)=>{
    const newTrainers = trainers.filter((trainer) => trainer.full_name !== full_name);
    setTrainers(newTrainers);
  }

   // view trainer details dialog
   const [handleViewTrainer, viewTrainerConfirmDialog] = useViewDialog({
    title: "Trainer's Details",
    fields: viewTrainerFields,
  });

  // handle add function
  const handleAddNewTrainer = async(state,dispatch) => {
    
    try {
      const data = {};
      // Append all keys of state to data except 'loading' and 'error'
      Object.keys(state).forEach(key => {
        if (key !== 'loading' && key !== 'error') {
          data[key] = state[key];
        }
      });
     
      setTrainers([...trainers, data])
      toast.success("Trainer added successfully");
      dispatch({type:"success"})

    
    } catch (error) {
      console.error("Error adding trainer:", error);
      toast.error("Error adding trainer");
    }
  
  }

   // handle edit function
   const handleEdit = (state) => {
    try {
      trainerData.forEach(async (row) => {
        if (row.id === state.id) {
          const changes = compareData(row, state);
          if (Object.keys(changes).length > 0) {
            console.log("changes=>", changes);
            // Call the API to update the student
              setTrainers(
                trainers.map((trainer) =>
                  trainer.id === state.id ? { ...trainer, ...changes } : trainer
                )
              )
              toast.success("Trainer updated successfully");
          }
        }
      }
      );
    
    } catch (error) {
      console.error("Error updating instructor:", error);
    }
  }

  return (
   <div className={card['main-card']}>
         <div className="flex justify-between mb-[19px]">
         <h1 className={typography["main-text"]}>Trainers Management</h1>
         <div className="flex justify-end mb-[19px] gap-4">
           
          {addTrainerConfirmDialog}
           </div>
         </div>
         <DataTableDemo data={trainers} columns={columns} isPending={false} 
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
