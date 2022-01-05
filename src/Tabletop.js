import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

const Repo = (props) => {
  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="space-between">
          <Grid item>Name</Grid>
          <Grid item>Stars</Grid>
          <Grid item>Issues</Grid>
          <Grid item>Forks</Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Repo
