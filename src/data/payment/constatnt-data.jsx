const paymentData=[
    {
      id:1,
      name:"PayPal",
      price:200,
      date:"12/12/2021",
      status:"Pending"
    },
    {
      id:2,
      name:"Fawry",
      price:200,
      date:"12/12/2021",
      status:"Pending"
    },
    {
      id:3,
      name:"hamda",
      price:200,
      date:"12/12/2021",
      status:"Success"
    },
    {
      id:4,
      name:"Cash",
      price:200,
      date:"12/12/2021",
      status:"Success"
    },
    {
      id:5,
      name:"PayPal",
      price:200,
      date:"12/12/2021",
      status:"Pending"
    },
    {
      id:6,
      name:"PayPal",
      price:200,
      date:"12/12/2021",
      status:"Pending"
    },
    {
      id:7,
      name:"Fawry",
      price:200,
      date:"12/12/2021",
      status:"Success"
    },
    {
      id:8,
      name:"Cash",
      price:200,
      date:"12/12/2021",
      status:"Success"
    },
    {
      id:9,
      name:"Vise",
      price:200,
      date:"12/12/2021",
      status:"Pending"
    },
    {
      id:10,
      name:"Visa",
      price:200,
      date:"12/12/2021",
      status:"Pending"
    }, 
  ]

//   columns of table data of payment
const columns = [
        
    {
        id: "name",
        header: "Payment Method",
        accessorKey: "name",
    },{
        id: "price",
        header: "Price",
        accessorKey: "price",
    },{
      id:"date",
      header:"Date",
      accessorKey:"date"
    },
    {
      id: "status",
      header: "Status",
      accessorKey: "status",
      className: "text-center",
      cell: ({row}) => {
        return (
          <span
            className={`px-3 py-2 rounded-full text-xs font-medium ${
              row?.original?.status==="Success"? "bg-[#29B84F33] text-green" : "bg-red-100 text-red-800"
            }`}
          >
            {row?.original?.status}
          </span>
        );
      }
    },
    {
        id: "actions",
        header: "Actions",
        accessorKey: "actions",
        className: "text-center",
    },
];
const viewPaymentFields = [
    {
        name: "name",
        label: "Payment Method",
        type: "text",
        disabled: true,
    },
    {
        name: "price",
        label: "Price",
        type: "text",
        disabled: true,
    },
    {
        name: "date",
        label: "Date",
        type: "text",
        disabled: true,
    },
    {
        name: "status",
        label: "Status",
        type: "selected",
        options:["Pending","Success"],
        disabled: true,
    },
];
  export {
    paymentData,
    columns,
    viewPaymentFields
  }