'use client';
import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";
import { handleDeleteRow } from "@/lib/actions/delete-server";
import { editCourseFields, addCourseFields, viewCourseFields, courseData, columns} from "./constant-data";
import { compareData } from "@/lib/utils";
import { handleUpdateInServer } from "@/lib/actions/patch-server";
import { toast } from "sonner";
import { useViewDialog } from "@/hooks/custom-view-dialog";
import { handlePostInServer } from "@/lib/actions/post-server";
import card from '@/style/card.module.css'
import typography from '@/style/typography.module.css'
import { useEffect } from "react";

export default function CoursesDataTable() {

  // edit course dialog
  const [handleEditGroup, editGroupConfirmDialog] = useEditDialog({
    onConfirm: (state) => handleEdit(state),
    title: "Edit Course",
    fields: editCourseFields,
  });

  // add group dialog
  const [handleAddGroup, addGroupConfirmDialog] = useAddDialog({
    onConfirm: (state) => handleAddNewGroup(state),
    title: "Add a New Course",
    fields: addCourseFields,
  });

  const [handleViewGroup, viewGroupConfirmDialog] = useViewDialog({
    title: "Course's Details",
    fields: viewCourseFields,
  });

  // delete group dialog
  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm: (row) => handleDeleteRow("/dashboard/groups/",row?.id,"/groups"),
    text: "Do you sure you wanna to delete this Course ? ",
    title: "Delete Course",
    successMessage: "Cousre has been deleted successfully",
  });

  const handleAddNewGroup = async (state) => {
    console.log("state=>", state);
    try {
      const data = {};
      // Append all keys of state to data except 'loading' and 'error'
      Object.keys(state).forEach(key => {
        if (key !== 'loading' && key !== 'error') {
          data[key] = state[key];
        }
      });

      courseData.push({...data})
      console.log(courseData)
    } catch (error) {
      console.error("Error adding section:", error);
      toast.error("Error adding section");
    }
  }

  const handleEdit = (state) => {
    try {
      Groups.forEach(async (row) => {
        if (row.id === state.id) {
          const changes = compareData(row, state);
          if (Object.keys(changes).length > 0) {
            console.log("changes=>", changes);
            // Call the API to update the student
            const formData=changes
            const response = await handleUpdateInServer(
              `/dashboard/groups/${row?.id}/`,
              "PATCH",
              formData,
              true,
              "object",
              "/groups"
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
 useEffect(()=>{},[courseData])
  return (
    <div className={card['main-card']}>
      <div className="flex justify-between mb-[19px]">
      <h1 className={typography["main-text"]}>Courses Management</h1>
      <div className="flex justify-end mb-[19px] gap-4">
        
       {addGroupConfirmDialog}
        </div>
      </div>
      <DataTableDemo data={courseData} columns={columns} isPending={false} 
      onDelete={handleDelete}
      onEdit={handleEditGroup}
      onView={handleViewGroup}
      />
     {deleteComponentConfirmDialog}
     {editGroupConfirmDialog}
     
      {viewGroupConfirmDialog}
    </div>
  );
}
