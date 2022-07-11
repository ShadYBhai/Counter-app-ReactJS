class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handelOne =this.handelOne.bind(this)
        this.handelMinus =this.handelMinus.bind(this)
        this.handelReset = this.handelReset.bind(this)
        this.state = {
            count : 0
        }
    }

    handelOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count+1
            }
        })
    }
    handelMinus(){
        this.setState((prevState) =>{//setState is a react property to operate that we need to bind Our fns to this. context.
            return {
                count: prevState.count-1
            }
        })
    }handelReset(){
        this.setState((prevState)=>{
            return {
                count : prevState=0
            }
        })
    }
    render(){
        return (<div>
            <h1>Count: {this.state.count} </h1>
            <button onClick={this.handelOne}>+1</button>
            <button onClick={this.handelMinus}>-1</button>
            <button onClick={this.handelReset}>Reset</button>
        </div>)
    }
}
        const root = ReactDOM.createRoot(document.getElementById('app'))
        root.render(<Counter/>)
