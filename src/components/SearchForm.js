import React, {Component} from 'react'

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value}) // Gets the value insert on the field
    }

    _handleSubmit = (e) => {     
        e.preventDefault()
        alert(this.state.inputMovie) 
    }   //Avoids the default native event of the browser when the form is sent

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                <div className="control">
                    <input 
                    className='input'
                    onChange={this._handleChange}
                    class="input" 
                    type="text" 
                    placeholder="Movie to search" />
                </div>
                <div className="control">
                    <button className="button is-info" >
                    Search
                    </button>
                </div>
                </div> 
            </form>
        )
    }
}