
// data course of table
const courseData=[
  { 
    id:1,
    name:"Frontend",
    instructor:"Instructor 1",
    number_trainees:10,
    department:"Department 1"
  },
  {
    id:2,
    name:"Backend",
    instructor:"Instructor 2",
    number_trainees:15,
    department:"Department 2"
  },
  {
    id:3,
    name:"Fullstack",
    instructor:"Instructor 3",
    number_trainees:20,
    department:"Department 3"
  },
  {
    id:4,
    name:"Android",
    instructor:"Instructor 1",
    number_trainees:25,
    department:"Department 1"
  },
  {
    id:5,
    name:"IOS",
    instructor:"Instructor 2",
    number_trainees:30,
    department:"Department 2"
  },
  {
    id:6,
    name:"React",
    instructor:"Instructor 3",
    number_trainees:35,
    department:"Department 3"
  },
  {
    id:7,
    name:"Angular",
    instructor:"Instructor 3",
    number_trainees:40,
    department:"Department 3"
  },
  {
    id:8,
    name:"Vue",
    instructor:"Instructor 1",
    number_trainees:45,
    department:"Department 1"
  },
  {
    id:9,
    name:"Node",
    instructor:"Instructor 2",
    number_trainees:50,
    department:"Department 2"
  },
  
]
// columns for the table
  const columns = [
    {
        id: "select",
        header: "",
        className: "text-center",
        accessorKey: "select",

    },
    {
      id: "id",
      header: "Course ID",
      accessorKey: "id",
      className: "text-left",
    },
    {
      id: "name",
      header: "Course Name",
      accessorKey: "name",
    },
    {
      id: "instructor",
      header: "Assigned Instructor",
      accessorKey: "instructor",
      className: "text-center",
    },
    {
      id: "number_trainees",
      header: "No.of Trainees",
      accessorKey: "number_trainees",
      className: "text-center",
    },
    {
      id: "department",
      header: "Department Name ",
      accessorKey: "department",
      className: "text-center",
    },
    {
      id: "actions",
      header: "Actions",
      accessorKey: "actions",
      className: "text-center",
    },
  ];
const addCourseFields = [
  {
    id: "name",
    name: "name", // Add `name` here to match state
    label: "Course Name",
    placeholder: "Enter course name",
    type: "text",
    required: true,
  },
  {
    id: "instructor",
    name: "instructor", // Add `name` here to match state
    label: "Instructor Name",
    placeholder: "Select instructor name",
    type: "selected",
    options: ["Instructor 1", "Instructor 2", "Instructor 3"],
    required: true,
  },
  {
    id: "department",
    name: "department", // Add `name` here to match state
    label: "Department Name",
    placeholder: "Select department name",
    type: "selected",
    options: ["Department 1", "Department 2", "Department 3"],
    required: true,
  },
];

const editCourseFields = [
  {
    id: "name",
    name: "name", // Add `name` here to match state
    label: "Group Name",
    placeholder: "Enter group name",
    type: "text",
  },
  {
    id: "instructor",
    name: "instructor", // Add `name` here to match state
    label: "Instructor Name",
    placeholder: "Select instructor name",
    type: "selected",
    options: ["Instructor 1", "Instructor 2", "Instructor 3"],
  },
  {
    id: "id",
    name: "department", // Add `name` here to match state
    label: "Department Name",
    placeholder: "Select department name",
    type: "selected",
    view: "title",
    options: ["Department 1", "Department 2", "Department 3"],
    
  },
];

 const viewCourseFields = [
  {
    id: "name",
    name: "name", // Add `name` here to match state
    label: "Group Name",
    placeholder: "Enter group name",
    type: "text",
    disabled: true,
  },
  {
    id: "instructor",
    name: "instructor", // Add `name` here to match state
    label: "Instructor Name",
    placeholder: "Select instructor name",
    type: "text",
    disabled: true,
  },
  {
    id: "department",
    name: "department", // Add `name` here to match state
    label: "Department Name",
    placeholder: "Select department name",
    type: "selected",
    options: ["Department 1", "Department 2", "Department 3"],
    disabled: true,
  },
];

export {
  courseData,
  columns,
  addCourseFields,
  editCourseFields,
  viewCourseFields,
}