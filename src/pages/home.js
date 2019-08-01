import React, {Component} from 'react'

import {Title} from '../components/Title'
import {SearchForm} from '../components/SearchForm'
import {MoviesList} from '../components/movies.list'

export class Home extends Component {
    state = {usedSearch: false, results: [] }

    _handleResults = (results) => {
      this.setState({results, usedSearch: true})
    }
  
    _renderResults() {
      return this.state.results.length === 0
        ? <p>Results not found</p>
        : <MoviesList movies={this.state.results} />
    }


    render() {
        return (
        <div>
            <Title>Search movies</Title>
            <div className='SearchForm-wrapper' >
              <SearchForm onResults={this._handleResults}/>
            </div>
            {this.state.usedSearch
                ? this._renderResults()
                : <small>Insert a movie </small>
            }
        </div>

        )
    }
}