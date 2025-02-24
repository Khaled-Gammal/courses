"use client";
import Image from "next/image";
import students from "../../assets/images/student.png";
import moment from "moment";
import { useViewDialog } from "@/hooks/custom-view-dialog";
import { viewPendingStudentsFields } from "@/data/student/pending-students/constatnt-data";
import { handlePostInServer } from "@/lib/actions/post-server";
import { toast } from "sonner";
import { viewWaitingStudentsFields } from "@/data/student/waiting-interview/constatnt-data";


export default function ViewCard({ student }) {

  const [handleViewCurrentStudent, viewCurrentStudentsConfirmDialog] = useViewDialog({
    onConfirm:(state)=>addNewStudent(state),
    title: "Student’s Interview",
    fields:student?.type==="waiting-interview"?viewWaitingStudentsFields: viewPendingStudentsFields,
    viewFooter:true
  });
const addNewStudent = async(state) => {
  try {
    const data = {};
    // Append all keys of state to data except 'loading' and 'error'
    Object.keys(state).forEach(key => {
      if (key !== 'loading' && key !== 'error') {
        data[key] = state[key];
      }
    }
    );
    if(student?.type==="waiting-interview"){
      
     const {group_id,code} = data;
      const response = await handlePostInServer(
        `/dashboard/contacted-students/${student.id}/activate/`,
        JSON.parse(JSON.stringify({group_id,code})),
        "/student",
        true,
        "object"
      );
      if (response.success) {
        toast.success(response.success);
      } else {
        toast.error(response.error);
      }
    }else{
    data["interview_time"] = moment(data["interview_time"]).format("YYYY-MM-DDTHH:mm:ssZ");
    const {interview_time, student_id: student} = data;
    const response = await handlePostInServer(
      "/dashboard/contacted-students/create/",
      JSON.parse(JSON.stringify({interview_time,student})),
      "/student",
      true,
      "object"
    );
    
    if (response.success) {
      toast.success(response.success);
    } else {
      toast.error(response.error);
    }
  }
  } catch (error) {
    console.error("Error adding section:", error);
    toast.error("Error adding section");
  }
}
  return (
    <>
      <div
        className="flex flex-row gap-3 border-b border-b-gray-200 py-[15.02px] w-[95%] cursor-pointer"
        onClick={() => handleViewCurrentStudent(student)} // Trigger the dialog on click
      >
        <Image
          src={student?.image||students}
          alt="student"
          height={45}
          width={45}
          loading="lazy"
          className="h-[45px] w-[45px] object-cover"
        />
        <div className="flex flex-col gap-1 w-full">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row  gap-4">
            <h2 className="text-sm font-medium leading-[16.94px] text-gray-700">
              {student?.full_name || "John Doe"}
            </h2>
            <p className="text-xs text-gray-400 font-normal">
              {(student?.email)}
            </p>
            </div>
            <p className="text-xs text-gray-200 font-normal">
              {student?.time ? moment(student.time).format("MM/DD/YYYY hh:mm A") : ""}
            </p>
          </div>
          <p className="text-xs text-gray-300 font-normal">
            Requested to join the Tagweed course as a new student requested to join the
            Tagweed course.
          </p>
        </div>
      </div>
      {/* Render the confirmation dialog */}
      {viewCurrentStudentsConfirmDialog}
    </>
  );
}
