let count=0

const minus = () =>{
    count --;
    counterApp()
}
const reset = () => {
    count = 0
    counterApp()
}
const plus = () =>{
    count++
    counterApp()
}
const counterApp= () =>{
    const templateTwo = (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={plus}>+1</button>
            <button onClick={minus}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>)

        ReactDOM.render(templateTwo, root)
}
counterApp()