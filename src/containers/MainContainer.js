import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { requestProducts, dispatch } from '../actions'
import data from '../data/product-list.json'
import AgGridReactTableProducts from './AgGridReactTableProducts'

class MainContainer extends Component{
    
    componentDidMount(){
        const {dispatch} = this.props
        dispatch( requestProducts() )
        fetch(data).then(response => response.json())
          .then(data => data);
    }

    render(){
        const {dispatch, isFetching, errorMessage} = this.props
        return(
            <div>
                {!isFetching && (
                    <AgGridReactTableProducts dispatch={dispatch} />
                )} ?
                <div>this</div> : "Loading...."
            </div>
        )
    }
}

function mapStateToProps (state) {
    const { getAllProducts } = state
    const { isFetching } = getAllProducts
    return {
      isFetching
    }
}
  
MainContainer.propTypes = {
    errorMessage: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(MainContainer)
