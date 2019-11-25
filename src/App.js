import React,{Component}from 'react';
import Button from './components/Button';
import  "./css/style.css"


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      current:'0',
      previous:[],
      nextisReset:false
    }
  }
 reset = ()=>{
    this.setState({current:'0',previous:[]})
  }

  addToCurrent =(symbol)=>{
    if(['+','*','-','/'].indexOf(symbol)>-1){
      let {previous} = this.state
      previous.push(this.state.current + symbol)
      this.setState({previous, nextisReset:true})
    }
    if((this.state.current ==='0' && symbol !== ".")||this.state.nextisReset){
     this.setState({current: symbol,nextisReset:false})
  }else{
    this.setState({current:this.state.current + symbol})
  }
}

calculate =()=>{
  let {previous,current,nextisReset}=this.state
  current=eval(String(previous + current))
  this.setState({current,previous:[],nextisReset:true})
}
 render(){
   const Buttons = [
     {symbol:'C',cols:'3',action:this.reset},
     {symbol:'/',cols:'1',action:this.addToCurrent},
     {symbol:'7',cols:'1',action:this.addToCurrent},
     {symbol:'8',cols:'1',action:this.addToCurrent},
     {symbol:'9',cols:'1',action:this.addToCurrent},
     {symbol:'+',cols:'1',action:this.addToCurrent},
     {symbol:'4',cols:'1',action:this.addToCurrent},
     {symbol:'6',cols:'1',action:this.addToCurrent},
     {symbol:'5',cols:'1',action:this.addToCurrent},
     {symbol:'-',cols:'1',action:this.addToCurrent},
     {symbol:'1',cols:'1',action:this.addToCurrent},
     {symbol:'2',cols:'1',action:this.addToCurrent},
     {symbol:'3',cols:'1',action:this.addToCurrent},
     {symbol:'*',cols:'1',action:this.addToCurrent},
     {symbol:'0',cols:'2',action:this.addToCurrent},
     {symbol:'.',cols:'1',action:this.addToCurrent},
     {symbol:'=',cols:'1',action:this.calculate},

   ]
  return (
    <div className="App">
      <div className='floaty'>
         {this.state.previous[this.state.previous.length-1]}
      </div>
     <input className="result" type="text" value={this.state.current}/>
     <br/>
     {Buttons.map((btn,i)=>{
       return <Button key={i} symbol = {btn.symbol} cols ={btn.cols} action={(symbol)=>btn.action(symbol)}/>
     })}
    </div>
  );
 }
 
}

export default App;
