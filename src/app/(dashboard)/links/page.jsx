
import LinksDataTable from "@/data/links/links-table";
import { GetDataInServerSide } from "@/lib/actions/get-server";

export default async function LinksPage() {
  const sections = await GetDataInServerSide(
    '/dashboard/sections/'
 )

  return (
      <div>
       <LinksDataTable links={sections}/>
      </div>
    )
  }
  