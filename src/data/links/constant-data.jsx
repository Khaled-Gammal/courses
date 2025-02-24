// data for the links table
const linksData = [
  {
    id: 1,
    course:"frontend",
    link: "https://www.google.com/",
    description: "Description 1",
    date: "12/12/2021",
  },
  {
    id: 2,
    course:"backend",
    link: "https://www.google.com/",
    description: "Description 2",
    date: "12/12/2021",
  },
  {
    id: 3,
    course:"fullstack",
    link: "https://www.google.com/",
    description: "Description 3",
    date: "12/12/2021",
  },
  {
    id: 4,
    course:"android",
    link: "https://www.google.com/",
    description: "Description 4",
    date: "12/12/2021",
  },
  {
    id: 5,
    course:"ios",
    link: "Link 5",
    description: "Description 5",
    date: "12/12/2021",
  },
  {
    id: 6,
    course:"react",
    link: "https://www.google.com/",
    description: "Description 6",
    date: "12/12/2021",
  },
  {
    id: 7,
    course:"angular",
    link: "https://www.google.com/",
    description: "Description 7",
    date: "12/12/2021",
  },
  {
    id: 8,
    course:"vue",
    link: "https://www.google.com/",
    description: "Description 8",
    date: "12/12/2021",
  },
  
  
   ]
 // columns for the table
   const columns = [
     
     {
       id: "course",
       header: "Course Name",
       accessorKey: "course",
     },
     {
      id:"link",
      header:"Link",
      accessorKey:"link",
     },
     {
        id: "description",
        header: "Description",
        accessorKey: "description",
      },
      {
        id: "date",
        header: "Date",
        accessorKey: "date",
     },
     {
       id: "actions",
       header: "Actions",
       accessorKey: "actions",
       className: "text-center",
     },
   ];
 
  
 const addLinkFields = [
  {
    id: "link",
    name: "link", // Add `name` here to match state
    label: "Link Name",
    placeholder: "Enter Section name",
    type: "text",
    required: true,
  },
  {
    id:"course",
    name:"course",
    label:"Course Name",
    placeholder:"Select course name",
    type:"selected",
    options:["frontend","backend","fullstack","android","ios","react","angular","vue"],
    required: true,
  }
  ,
  {
    id: "description",
    name: "description", // Add `name` here to match state
    label: "Description",
    placeholder: "Enter Description",
    type: "text",
  },
  {
    id: "date",
    name: "date", // Add `name` here to match state
    label: "Date",
    placeholder: "Enter Date",
    type: "date",
    required: true,
  }
  
];

const editLinkFields = [
  {
    id:"link",
    name:"link",
    label:"Link Name",
    placeholder:"Enter Link name",
    type:"text",
  },
  {
    id:"course",
    name:"course",
    label:"Course Name",
    placeholder:"Select course name",
    type:"selected",
    options:["frontend","backend","fullstack","android","ios","react","angular","vue"],
  },
  {
    id:"description",
    name:"description",
    label:"Description",
    placeholder:"Enter Description",
    type:"text",
  },
  {
    id:"date",
    name:"date",
    label:"Date",
    placeholder:"Enter Date",
    type:"date",
  }
];

const viewLinkFields = [
  {
    id:"link",
    name:"link",
    label:"Link Name",
    type:"text",
    disabled:true,
  },
  {
    id:"course",
    name:"course",
    label:"Course Name",
    type:"text",
    disabled:true,
  },
  {
    id:"description",
    name:"description",
    label:"Description",
    type:"text",
    disabled:true,
  },
  {
    id:"date",
    name:"date",
    label:"Date",
    type:"text",
    disabled:true,
  }
];

export {
  linksData,
  columns,
  addLinkFields,
  editLinkFields,
  viewLinkFields,
}