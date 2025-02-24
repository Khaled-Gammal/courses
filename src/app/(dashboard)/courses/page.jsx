import CoursesDataTable from "@/data/courses/courses-table";
import { GetDataInServerSide } from "@/lib/actions/get-server";

export default async function CoursesPage() {
  const courses = await GetDataInServerSide("/api/courses");

  return (
    <div>
      <CoursesDataTable courses={courses} />
    </div>
  )
}
