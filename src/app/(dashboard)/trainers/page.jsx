import TrainersDataTable from '@/data/trainers/trainers-table'
import { GetDataInServerSide } from '@/lib/actions/get-server'
import React from 'react'

async function TrainersPage({searchParams}) {
    const trainers = await GetDataInServerSide(
        '/api/trainers/'
      )
  return (
    <div>
        <TrainersDataTable trainers={trainers}/>
    </div>
  )
}

export default TrainersPage