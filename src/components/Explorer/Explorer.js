import React from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'

import View from './View'
import { DataExplorer } from './Data'
import AppBar from './AppBar'

function Explorer() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          {/* <Typography>Header</Typography> */}
          {/* <Typography paragraph>
            Sub Header
          </Typography> */}
          <AppBar />
        <Divider />
        </Grid>
        {
          DataExplorer.map(c => (
            <Grid key={c.id} item xs={6} sm={3}>
              <View 
                link={c.path}
                avatar={c.avatar}
                title={c.title}
                subheader={c.subheader}
                content={c.content}
                badge1={c.badge1}
                badge2={c.badge2}
                collapsetitle={c.collapseTitle}
                collapsecontent={c.collapseContent}
              />
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}

export default Explorer
