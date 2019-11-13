import React from 'react'
import View from './View'
import Header from './Header'

const initialData = [
  { id: 1, header: "Icon here", title: "Unit Measurement", subHeader: "Distance, Weight, Volume, etc..." },
  { id: 2, header: "Icon here", title: "Quality", subHeader: "Quality control, assurance, etc..." },
  { id: 3, header: "Icon here", title: "Equipment", subHeader: "Excavator, Truck, Barge, etc..." }
]


function Dashboard() {
  return (
    <>
      <Header value={"PT Bara Coal"} />
      <View 
        title={"Unit Measurement"}
        subHeader={"Distance, Weight, Volume, etc..."} 
      />
    </>
  )
}

export default Dashboard
