import React from 'react'
import '../styles/App.css'
import numeral from 'numeral'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { StarFillIcon, IssueOpenedIcon, RepoForkedIcon } from '@primer/octicons-react'
const Repo = (props) => {
  const { item, arrayOfRepositories, removeRepo } = props
  const itemIndex = arrayOfRepositories.indexOf(item)
  // console.log(item)
  return (
    <Card className="repoCard">
      <CardContent className="repoCardContent">
        <Grid container justifyContent="space-between">
          <Grid item xs={12}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Grid container>
                  <Grid item>
                    {item.name}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item>
                    <Button onClick={() => removeRepo(itemIndex)}>
                      <DeleteIcon />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <StarFillIcon verticalAlign="unset"/>{numeral(item.stargazers_count).format('0a')}
          </Grid>
          <Grid item>
            <IssueOpenedIcon verticalAlign="unset"/>{numeral(item.open_issues_count).format('0a')}
          </Grid>
          <Grid item>
          <RepoForkedIcon verticalAlign="unset"/>{numeral(item.forks).format('0a')}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Repo