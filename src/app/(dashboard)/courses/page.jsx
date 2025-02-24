import CoursesDataTable from "@/data/courses/courses-table";
import { GetDataInServerSide } from "@/lib/actions/get-server";

export default async function CoursesPage() {
  const groups = await GetDataInServerSide(
    '/dashboard/groups/'
 )

  return (
    <div>
      <CoursesDataTable courses={groups} />
    </div>
  )
}
