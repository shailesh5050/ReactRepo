import React from 'react';
import App from './App';

class About extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Shailesh",
            college:"AIMT LKO"
        }
        console.warn("this is constructor");
    }
    componentDidMount(){
        console.warn('did mount');
    }
    render(){
        return(
            <div>
                <h1>Hello From About...</h1>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}
export default About;