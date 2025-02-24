
import { PaymentDataTable } from "@/data/payment/payment-table";
import { GetDataInServerSide } from "@/lib/actions/get-server";


export default async function PaymentPage() {

  const payment = await GetDataInServerSide(
    '/api/payment/'
  )
  return (
      <div>
       <PaymentDataTable payment={payment}/>
      </div>
    )
  }
  