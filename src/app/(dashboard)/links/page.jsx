
import LinksDataTable from "@/data/links/links-table";
import { GetDataInServerSide } from "@/lib/actions/get-server";

export default async function LinksPage() {
  const links = await GetDataInServerSide("/api/links");

  return (
      <div>
       <LinksDataTable links={links}/>
      </div>
    )
  }
  