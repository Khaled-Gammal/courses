"use client"
import { DataTableDemo } from "@/components/shared/table-data";
import React from "react";
import card  from '@/style/card.module.css';
import  typography  from '@/style/typography.module.css';
import { columns, paymentData, viewPaymentFields } from "./constatnt-data";
import { useViewDialog } from "@/hooks/custom-view-dialog";


export const PaymentDataTable = () => {
   
   
 // view payment details dialog
  const [handleViewPayment, viewPaymentConfirmDialog] = useViewDialog({
    title: "Payment's Details",
    fields: viewPaymentFields,
  });

  return (
    <div className={card['main-card']}>
      <div className="flex justify-between mb-[19px]">
      <h1 className={typography["main-text"]}>Payment Management</h1>
      <div className="flex justify-end mb-[19px] gap-4">
        </div>
      </div>
      <DataTableDemo data={paymentData} columns={columns} isPending={false} 
      onView={handleViewPayment}
      />
      {viewPaymentConfirmDialog}
    </div>
  );
};
