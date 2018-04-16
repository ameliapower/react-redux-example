import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './App.css'
import MainContainer from './containers/MainContainer'
import { dispatch } from './actions'

class App extends Component {
  render() {
    const { dispatch, isFetching } = this.props
    console.log(this.props)
    return (
      <div className="App">
       <MainContainer 
         dispatch={dispatch}
       />
      </div>
    );
  }
}

function mapStateToProps (state) {
  const { getAllProducts } = state
  console.log(state)
  const { isFetching } = getAllProducts

  return {
    isFetching
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool
}
// .isRequired
export default connect(mapStateToProps)(App)

