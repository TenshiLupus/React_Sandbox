import React, {Component} from 'react'

function isAuthed(){
    return true
}

//Top level tags are necessary if we want to return multiple adjacent tags at once, else we have to use fragments.
//Upper case for React components
export default class App extends Component{
    render() {
        return (
            <React.Fragment>
                <h1>Hello</h1>
                <p>Today</p>
                <p>What is 2 + 2</p>       
            </React.Fragment>
        )
    }
}
