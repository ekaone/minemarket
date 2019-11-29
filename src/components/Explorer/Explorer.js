import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'

import View from './View'
import AppBar from './AppBar'
import { DataExplorer } from './Data'

function Explorer() {

  const [explorer, setExplorer] = useState(DataExplorer)
  const [value, setValue] = useState()

  const handleChange = (event) => {
    let s = DataExplorer.filter(ps => ps.title.toLowerCase() === event.target.value.toLowerCase())
    console.log(s)
    // setValue(s)
  }

  const handleSearch = () => {
    console.log(value)
    // setExplorer(value)
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <AppBar 
            handlerChange={handleChange}
            handlerSearch={handleSearch}
            value={value}
          />
        <Divider />
        </Grid>
        {
          explorer.map(c => (
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

