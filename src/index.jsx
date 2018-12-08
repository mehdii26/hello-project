import React from 'react';
import ReactDOM from 'react-dom';
import Hello from 'C:/Users/DELL/hello-project/src/Component.jsx'


class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.state = {value :'',text:''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        this.setState({text: this.state.value})
    }

    render (){
        return(
            <div>
                <input type = "text" value = {this.state.value} onChange={(e)=>this.setState({value:e.target.value})}  name='nom' />
                <button onClick={this.handleChange} >Submit</button>
                <Hello name = {this.state.text}/>
            </div>
        )
    }
}
const element = <Welcome  />

ReactDOM.render(
    element,
    document.getElementById('root')
  );