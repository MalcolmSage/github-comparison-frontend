import React, { Component } from 'react'
import './styles/App.css'
import { Box, Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'


import {
  makeStyles,
} from "@material-ui/core/styles";

import SearchAppBar from "./components/searchBar"
import Repo from './components/Repo'
import { Container } from '@mui/material';

const useStyles = makeStyles({
  primaryBG: {
    backgroundColor: "#282c34",
  },
  secondaryText: {
    color: "white"
  }
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: "",
      user: "",
      repo: "",
      statusCode: "",
      repoSearches: ['facebook/react', 'angular/angular.js', 'emberjs/ember.js'],
      arrayOfRepositories: [],
    }
  }

  onChangeUser = (event) => {
    this.setState({ user: event.target.value });
  }
  onChangeRepo = (event) => {
    this.setState({ repo: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { user, repo } = this.state;
    const url = `https://api.github.com/repos/${user}/${repo}`
    fetch(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        // Authorization: 'token '
      }
    })
    .then(response => {
      // console.log(response)
      if (response.status === 404) {
        // console.log("404")
        this.setState({
          statusCode: 404
        })
      } else if (response.status === 200){
        this.setState({
          statusCode: 200
        })
        return response.json()
      } else {
        this.setState({
          statusCode: 201
        })
        return false
      }
    })
    .then(data => {
      if (this.state.statusCode === 200) {
        // console.log(this.state.statusCode)
        let currentRepo = data
        let newArray = this.state.arrayOfRepositories
        newArray.push(currentRepo)
        this.setState({
          user: "",
          repo: "",
          arrayOfRepositories: newArray,
        })
      }
    })
      
  }

  quickSearch = () => {
    const { repoSearches } = this.state
    let repos = []
    repoSearches.forEach((item) => {
      let url = `https://api.github.com/repos/${item}`
      fetch(url, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        }
      })
        .then(response => response.json())
        .then(data => {
          repos.push(data)
          this.setState({
            arrayOfRepositories: repos
          })
        })
    })
  }

  render() {
    return (
      <Box className="App">
        <SearchAppBar statusCode={this.state.statusCode} quickSearch={this.quickSearch} style={useStyles} onChangeUser={this.onChangeUser} onChangeRepo={this.onChangeRepo} onSubmit={this.onSubmit} user={this.state.user} repo={this.state.repo} />
        <Container sx={{ paddingTop: 2 }} maxWidth="xl">
          <Grid
            container
            spacing={2}
          >
            {this.state.arrayOfRepositories.map((item) => (
              <Grid item xs={12} md={4} key={item.id}>
                <Repo item={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    )
  }
}

export default App