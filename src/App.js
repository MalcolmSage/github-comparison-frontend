import React, { Component } from 'react'
import Repo from './Repo'
import Tabletop from './Tabletop'
import './styles/App.css'
import { Box, Grid } from '@material-ui/core'

import {
  makeStyles,
} from "@material-ui/core/styles";

import SearchAppBar from "./components/searchBar"

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
      repoSearches: ['facebook/react', 'angular/angular.js', 'emberjs/ember.js'],
      arrayOfRepositories: [],
    }
  }

  onChange = (event) => {
    this.setState({ value: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { value } = this.state;
    const url = `https://api.github.com/repos/${value}`
    fetch(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        // Authorization: 'token '
      }
    })
      .then(response => response.json())
      .then(data => {
        let currentRepo = data
        let newArray = this.state.arrayOfRepositories
        newArray.push(currentRepo)
        this.setState({
          value: "",
          arrayOfRepositories: newArray,
        })
      })
  }

  render() {
    // console.log('render test')
    const { arrayOfRepositories } = this.state
    // arrayOfRepositories.map((item) => console.log(item))
    return (
      <Box className="App">
        <SearchAppBar style={useStyles} onChange={this.onChange} onSubmit={this.onSubmit} value={this.state.value} />
        {arrayOfRepositories.map((item) => (
          <Repo item={item} key={item.id} />
        ))}
      </Box>
    )
  }
}

export default App