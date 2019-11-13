import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Styles } from './Styles'
import View from './View'
import Header from './Header'
import SpeedIcon from '@material-ui/icons/Speed';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import HighQualityIcon from '@material-ui/icons/HighQuality';


const initialData = [
  { id: 1, header: "Icon here", title: "Unit Measurement", subHeader: "Distance, Weight, Volume, etc...", icon: "SpeedIcon" },
  { id: 2, header: "Icon here", title: "Quality", subHeader: "Quality control, assurance, etc...", icon: "HighQualityIcon" },
  { id: 3, header: "Icon here", title: "Equipment", subHeader: "Excavator, Truck, Barge, etc...", icon: "LocalShippingIcon" }
]

const setIcon = (icon) => {
  switch (icon) {
    case "SpeedIcon":
      return <SpeedIcon style={{ color: "#6200ea", fontSize: 35 }} />
      break;
    case "HighQualityIcon":
      return <HighQualityIcon style={{ color: "#6200ea", fontSize: 35 }} />
    case "LocalShippingIcon":
      return <LocalShippingIcon style={{ color: "#6200ea", fontSize: 35 }} />
    default:
      break;
  }
}

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
                icon={setIcon(c.icon)}
              />  
            </Grid>    
          ))
        }
      </Grid>
      
    </>
  )
}

export default Dashboard
