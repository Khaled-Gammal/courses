import TrainersDataTable from '@/data/trainers/trainers-table'
import { GetDataInServerSide } from '@/lib/actions/get-server'
import React from 'react'

async function TrainersPage({searchParams}) {
    const departments = await GetDataInServerSide(
        '/dashboard/departments/'
      )
  return (
    <div>
        <TrainersDataTable trainers={departments}/>
    </div>
  )
}

export default TrainersPage