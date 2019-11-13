import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Styles } from './Styles'
import View from './View'
import Header from './Header'

const initialData = [
  { id: 1, header: "Icon here", title: "Unit Measurement", subHeader: "Distance, Weight, Volume, etc..." },
  { id: 2, header: "Icon here", title: "Quality", subHeader: "Quality control, assurance, etc..." },
  { id: 3, header: "Icon here", title: "Equipment", subHeader: "Excavator, Truck, Barge, etc..." }
]


function Dashboard() {

  const classes = Styles()

  return (
    <>
      <Header value={"PT Bara Coal"} />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        {
          initialData.map(c => (
            <Grid item xs={12} sm={4}>
              <View 
                title={c.title}
                subHeader={c.subHeader} 
                classes={classes.paper}
              />  
            </Grid>    
          ))
        }
      </Grid>
      
    </>
  )
}

export default Dashboard
