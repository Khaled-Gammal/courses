
import { PaymentDataTable } from "@/data/payment/payment-table";
import { GetDataInServerSide } from "@/lib/actions/get-server";


export default async function PaymentPage() {

  const financial = await GetDataInServerSide(
    '/dashboard/admins/'
  )
  return (
      <div>
       <PaymentDataTable payment={financial}/>
      </div>
    )
  }
  