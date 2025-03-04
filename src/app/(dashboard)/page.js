import { TotalUsersChart } from "@/components/charts/line-chart";
import { Component } from "@/components/charts/pie-chart";
import { DataTableDemo } from "@/components/shared/table-data";
import { GetDataInServerSide } from "@/lib/actions/get-server";
import card from "@/style/card.module.css"

export default async function Home() {
    const overview = await GetDataInServerSide(
        '/api/overview/'
      )

      
    const columns = [
        {   id:"name",
            header: "Instructor Name",
            accessorKey: "name",
            className: "text-left text-primary text-[14px] font-medium",
        },
        {   id:"courses",
            header: "Courses",
            accessorKey: "courses",
            className: "text-center text-primary text-[14px] font-medium",

        },
        {   id:"working_hours",
            header: "Working Hours",
            accessorKey: "working_hours",
            className: "text-center text-primary text-[14px] font-medium",
        },
        {   id:"salary_till_today",
            header: "Salary till today",
            accessorKey: "salary_till_today",
            className: "text-center text-primary text-[14px] font-medium",
        }
    ]
    const data = [
        {   
            name: "Mohamed Ali",
            courses: "Frontend",
            working_hours: "150 Hours",
            salary_till_today: "5000  EGP"
        },
        {
            name: "Mohamed Ali",
            courses: "Backend",
            working_hours: "150 Hours",
            salary_till_today: "5000  EGP"
        },
        {
            name: "Mohamed Ali",
            courses: "UX/UI",
            working_hours: "150 Hours",
            salary_till_today: "5000  EGP"
        },
        {
            name: "Mohamed Ali",
            courses: "Flutter",
            working_hours: "150 Hours",
            salary_till_today: "$5000  EGP"
        },
    ]
    const total=[
        {
            title: "Total Trainers",
            value: 200
        },{
            title: "Total Instructors",
            value: 15
        },{
            title: "Total Courses",
            value: 20
        },
        {
            title: "Total Sessions",
            value: 100
        }
    ]
    return (
        <section className="flex gap-8 flex-col">
            <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-5">
                {
                    total.map((item) => (
                        <div key={item} className={`${card['main-card']} flex flex-col gap-4`}>
                            <h1 className="text-primary text-sm font-semibold">{item?.title} </h1>
                            <p className="text-[#8D8D8D] text-2xl font-normal">{item?.value}</p>
                            
                        </div>
                    ))
                }
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
                <TotalUsersChart />
                <Component department_percentages={overview?.department_percentages} />

                </div>
                <div className="grid md:grid-cols-1 sm:grid-cols-1 gap-5">
                    <DataTableDemo
                    columns={columns}
                    data={data}
                    isPending={false} 
                    />
                    </div>
        </section>
    )
}