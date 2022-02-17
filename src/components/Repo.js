import React, { Component } from 'react'
import '../styles/App.css'
import numeral from 'numeral'

import LanguagesChart from './languagesChart'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import { Button } from '@mui/material'
import { StarFillIcon, IssueOpenedIcon, RepoForkedIcon } from '@primer/octicons-react'
import LanguagesList from './languageList'

class Repo extends Component {
  constructor() {
    super()
    this.state = {
      languages: {}
    }
  }

  

  componentDidMount = (event) => {
    const { item } = this.props
    fetch(item.languages_url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        languages: data
      })
    })
  }

  render() {
    const { item, arrayOfRepositories, removeRepo } = this.props
    const itemIndex = arrayOfRepositories.indexOf(item)
    return (
      <Card className="repoCard">
          <CardContent className="repoCardContent">
            <Grid container justifyContent="space-between">
              <Grid item xs={12} >
                <Grid container justifyContent="space-between">
                  <Grid item xs={12}>
                    {item.full_name.length > 30 ? `${item.full_name.substring(0, 30)}...` : item.full_name}
                  </Grid>
                  <Grid item>
                    <Grid container>
                      <Grid item>
                        <Button onClick={() => removeRepo(itemIndex)}>
                          Remove
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item xs={12}>
                    Stars
                  </Grid>
                  <Grid item xs={12}>
                    <StarFillIcon verticalAlign="unset" />{numeral(item.stargazers_count).format('0a')}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item xs={12}>
                    Issues
                  </Grid>
                  <Grid item xs={12}>
                    <IssueOpenedIcon verticalAlign="unset" />{numeral(item.open_issues_count).format('0a')}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item xs={12}>
                    Forks
                  </Grid>
                  <Grid item xs={12}>
                    <RepoForkedIcon verticalAlign="unset" />{numeral(item.forks).format('0a')}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <LanguagesChart item={item} languages={this.state.languages}/>
              </Grid>
              <Grid item xs={12}>
                <LanguagesList item={item} languages={this.state.languages}/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

      )
    }
  }
  
export default Repo

// const Repo = (props) => {
//   const { item, arrayOfRepositories, removeRepo } = props
  
//   let url = `https://api.github.com/repos/${item}`


//   return (
//     <Card className="repoCard">
//       <CardContent className="repoCardContent">
//         <Grid container justifyContent="space-between">
//           <Grid item xs={12} >
//             <Grid container justifyContent="space-between">
//               <Grid item xs={12}>
//                 {item.full_name}
//               </Grid>
//               <Grid item>
//                 <Grid container>
//                   <Grid item>
//                     <Button onClick={() => removeRepo(itemIndex)}>
//                       Remove
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>
//           <Grid item>
//             <StarFillIcon verticalAlign="unset" />{numeral(item.stargazers_count).format('0a')}
//           </Grid>
//           <Grid item>
//             <IssueOpenedIcon verticalAlign="unset" />{numeral(item.open_issues_count).format('0a')}
//           </Grid>
//           <Grid item>
//             <RepoForkedIcon verticalAlign="unset" />{numeral(item.forks).format('0a')}
//           </Grid>
//           <Grid item xs={12}>
//             <LanguagesChart item={item} />
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   )
// }

// export default Repo