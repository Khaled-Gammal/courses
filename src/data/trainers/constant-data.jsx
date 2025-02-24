
 const trainerData = [
    {
      id: 1,
      full_name: "Trainer 1",
      email: "trainer1@email.com",
      phone: "+201123456789",
      address: "Trainer 1 Address",
      department: "Department 1",
    },
    {
      id: 2,
      full_name: "Trainer 2",
      email: "trainer2@email.com",
      phone: "+201123456789",
      address: "Trainer 2 Address",
      department: "Department 2",
    },
    {
      id: 3,
      full_name: "Trainer 3",
      email: "trainer2@email.com",
      phone: "+201123456789",
      address: "Trainer 3 Address",
      department: "Department 3",
    },
    {
      id: 4,
      full_name: "Trainer 4",
      email: "trainer4@email.com",
      phone: "+201123456789",
      address: "Trainer 4 Address",
      department: "Department 1",
    },
    {
      id: 5,
      full_name: "Trainer 5",
      email: "trainer5@email.com",
      phone: "+201123456789",
      address: "Trainer 5 Address",
      department: "Department 2",
    },
    {
      id: 6,
      full_name: "Trainer 6",
      email: "trainer6@email.com",
      phone: "+201123456789",
      address: "Trainer 6 Address",
      department: "Department 3",
    },
    {
      id: 7,
      full_name: "Trainer 7",
      email: "trainer7@email.com",
      phone: "+201123456789",
      address: "Trainer 7 Address",
      department: "Department 1",
    },
    {
      id: 8,
      full_name: "Trainer 8",
      email: "trainer8@email.com",
      phone: "+201123456789",
      address: "Trainer 8 Address",
      department: "Department 2",
    },
    {
      id: 9,
      full_name: "Trainer 9",
      email: "trainer9@email.com",
      phone: "+201123456789",
      address: "Trainer 9 Address",
      department: "Department 3",
    },
  ];

  const columns=[
    {
      id: "full_name",
      header: "Trainer Name",
      accessorKey: "full_name",
    },
    {
      id: "email",
      header: "Email",
      accessorKey: "email",
    },
    {
      id: "phone",
      header: "Phone",
      accessorKey: "phone",
    },
    {
      id: "address",
      header: "Address",
      accessorKey: "address",
    },
    {
      id: "department",
      header: "Department",
      accessorKey: "department",
    },
    {
      id: "actions",
      header: "Actions",
      accessorKey: "actions",
    }
  ];


 const addTrainerFields = [
    {
      id: "full_name",
      name: "full_name", // Add `name` here to match state
      label: "Trainer name",
      placeholder: "Enter Trainer name",
      type: "text",
      required: true,
    },
    {
      id: "email",
      name: "email", // Add `name` here to match state
      label: "Email",
      placeholder: "Enter Email",
      type: "email",
      required: true,
    },
    {
     
      name: "phone",
      id: "phone",
      label: "Phone",
      type: "phone",
      placeholder: "Enter Phone",
      required: true,
    },{
      id:"address",
      name:"address",
      label:"Address",
      placeholder:"Enter Address",
      type:"text",
      required:true
    },
    {
      id: "department",
      name: "department", // Add `name` here to match state
      label: "Department Name",
      placeholder: "Select department name",
      type: "selected",
      options: ["Department 1", "Department 2", "Department 3"],
      required: true,
    }
  ];
  
  const editTrainerFields = [
      {
        id: "full_name",
        name: "full_name", // Add `name` here to match state
        label: "Trainer name",
        placeholder: "Enter Trainer name",
        type: "text",
      },
      {
        id: "email",
        name: "email", // Add `name` here to match state
        label: "Email",
        placeholder: "Enter Email",
        type: "email",
      },
      {
       
        name: "phone",
        id: "phone",
        label: "Phone",
        type: "phone",
        placeholder: "Enter Phone",
      },{
        id:"address",
        name:"address",
        label:"Address",
        placeholder:"Enter Address",
        type:"text",
      },
      {
        id: "department",
        name: "department", // Add `name` here to match state
        label: "Department Name",
        placeholder: "Select department name",
        type: "selected",
        options: ["Department 1", "Department 2", "Department 3"],
      }
        
    ];

      const viewTrainerFields = [
        {
          id: "full_name",
          name: "full_name", // Add `name` here to match state
          label: "Trainer name",
          type: "text",
          disabled: true,
        },
        {
          id: "email",
          name: "email", // Add `name` here to match state
          label: "Email",
          type: "text",
          disabled: true,
        },
        {
          id: "phone",
          name: "phone", // Add `name` here to match state
          label: "Phone",
          type: "phone",
          disabled: true,
        },
        {
          id: "address",
          name: "address", // Add `name` here to match state
          label: "Address",
          type: "text",
          disabled: true,
        },
        {
          id: "department",
          name: "department", // Add `name` here to match state
          label: "Department Name",
          type: "text",
          disabled: true,
        },
      ];

    export {trainerData,columns,addTrainerFields,editTrainerFields,viewTrainerFields};