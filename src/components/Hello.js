import React, {Component} from 'react'

//Top level tags are necessary if we want to return multiple adjacent tags at once, else we have to use fragments.
//Upper case for React components
export default class Hello extends Component{
    render() {
        return (          
            <h1>
                {this.props.header} {this.props.username}
                {this.props.authed === true ? <button onClick={this.props.logout

                }>Log out</button> : null}

            </h1>
        )
    }
}
