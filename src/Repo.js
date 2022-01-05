import React from 'react'
import './styles/App.css'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'


const Repo = (props) => {
  const {item} = props

  return (
    <Card className="repoCard">
      <CardContent className="repoCardContent">
        <Grid container justifyContent="space-between">
          <Grid item >{item.name}</Grid>
          <Grid item>{item.stargazers_count}</Grid>
          <Grid item>{item.open_issues_count}</Grid>
          <Grid item>{item.forks}</Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Repo