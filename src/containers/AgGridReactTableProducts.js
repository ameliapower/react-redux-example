import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AgGridReact } from 'ag-grid-react'

// import './ag-grid.scss'
// import './ag-theme-material.scss'

class AgGridReactTableProducts extends Component{
    constructor(props){
        super()
        console.log(props)
        //sets the context to this component
        this.context = {componentParent: this}
        // this.createSubTables = this.createSubTables.bind(this)

        // this.childColumns = props.childColumns
    }

    // createSubTables(params){
    //     return(
    //         <div>
    //            <AgGridReact
    //             columnDefs={this.childColumns}
    //             rowData = {params.data.tocome}
    //             context={this.context}
    //             onGridReady={this.onGridReady.bind(this)}
    //           />  
    //         </div>
    //     )
    // }

    onGridReady(params){
        
    }

    render(){
        const isFetching = this.props.isFetching
        const dispatch = this.props.dispatch
        const columns = this.props.columns
        const rows = this.props.rows

        return(
            <div className='ag-theme-material'>
              <AgGridReact
                columnDefs={columns}
                rowData = {rows}
                context={this.context}
              />
            </div>
        )
    }
}

AgGridReactTableProducts.defaultProps = {
    columns: [],
    rows: []
}

function mapStateToProps(state){
    const { getAllProducts } = state
    const { isFetching, columns, rows } = getAllProducts

    return {
        isFetching, 
        columns, 
        rows
    }
}


export default connect(mapStateToProps)(AgGridReactTableProducts)