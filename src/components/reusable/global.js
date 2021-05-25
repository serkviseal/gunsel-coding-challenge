import React, { Component } from 'react'
import Footer from './footer'
import Header from './header'

/*this is the component that contains all the other components. 
Its like the index file for the rest of the components
*/
export class Global extends Component {
    render() {
        return (
            <div className={`global-container ${this.props.className}`}>
                <Header />
                {this.props.children}
                {/**this is where the content will appear */}
                <Footer />
            </div>
        )
    }
}

export default Global
