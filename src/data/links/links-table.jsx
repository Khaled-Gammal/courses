'use client';
import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";
import { handleDeleteRow } from "@/lib/actions/delete-server";
import { columns, linksData, editLinkFields, addLinkFields, viewLinkFields} from "./constant-data";
import { compareData } from "@/lib/utils";
import { handleUpdateInServer } from "@/lib/actions/patch-server";
import { toast } from "sonner";
import { useViewDialog } from "@/hooks/custom-view-dialog";
import { handlePostInServer } from "@/lib/actions/post-server";
import  card  from '@/style/card.module.css';
import  typography  from '@/style/typography.module.css';
import { useState } from "react";

export default function LinksDataTable() {
  const [links, setLinks] = useState(linksData);
 
 
  // edit Link dialog
  const [handleEditLink, editLinkConfirmDialog] = useEditDialog({
    onConfirm: (state,dispatch) => handleEdit(state,dispatch),
    title: "Edit Link",
    fields: editLinkFields,
  });

  // add link dialog
  const [handleAddLink, addLinkConfirmDialog] = useAddDialog({
    onConfirm: (state,dispatch) => handleAddNewLink(state,dispatch),
    title: "Add a New Link",
    fields: addLinkFields,
  });

  // view Link dialog
  const [handleViewLink, viewLinkConfirmDialog] = useViewDialog({
    title: "Link's Details",
    fields: viewLinkFields,
  });

  // delete Link dialog
  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm: (row) => handleDeleteRow(row?.course),
    text: "Do you sure you wanna to delete this Link ? ",
    title: "Delete Link",
  });

  const handleDeleteRow=(course)=>{
    const newLinks = links.filter((link) => link.course !== course);
    setLinks(newLinks);
  }
// hadle add function
const handleAddNewLink = async(state,dispatch) => {
  try {
    const data = {};
    // Append all keys of state to data except 'loading' and 'error'
    Object.keys(state).forEach(key => {
      if (key !== 'loading' && key !== 'error') {
        data[key] = state[key];
      }
    });
    setLinks({...links, data})
    toast.success("Link added successfully");
    dispatch({type:"success"})
   
    
  } catch (error) {
    console.error("Error adding Link:", error);
    toast.error("Error adding Link");
  }

}
  // handle edit function
  const handleEdit = (state,dispatch) => {
    try {
      linksData.forEach(async (row) => {
        if (row.id === state.id) {
          const changes = compareData(row, state);
          if (Object.keys(changes).length > 0) {
            console.log("changes=>", changes);
            // Call the API to update the student
            
              setLinks(
                links.map((link) =>
                  link.id === state.id ? { ...link, ...changes } : link
                )
              )
              toast.success("Link updated successfully");
              dispatch({type:"success"})
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
      <h1 className={typography["main-text"]}>  Courses Links</h1>
      <div className="flex justify-end mb-[19px] gap-4">
        
      {addLinkConfirmDialog}
        </div>
      </div>
      <DataTableDemo data={links} columns={columns} isPending={false} 
      onDelete={handleDelete}
      onEdit={handleEditLink}
      onView={handleViewLink}
      />
     {deleteComponentConfirmDialog}
     {editLinkConfirmDialog}
     
      {viewLinkConfirmDialog}
    </div>
  );
}
