// let count = 0; 
// const addOne = () => {
//     count ++; 
//     renderCounterApp(); 
// }; 
// const minusOne = () => {
//     count--;
//     renderCounterApp(); 
// }; 

// const reset = () => {
//     count = 0; 
//     renderCounterApp(); 
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>Reset</button>
//     </div>
//     );

//     ReactDOM.render(templateTwo, appRoot); 

// };

// renderCounterApp(); 

class Counter extends React.Component {
    constructor(props) {
        super(props); 
        this.handleAddOne = this.handleAddOne.bind(this); 
        this.handleMinusOne = this.handleMinusOne.bind(this); 
        this.handleReset = this.handleReset.bind(this); 
        this.state = {
            count: []
        };
    }
    componentDidMount() {
        try {
            const number = parseInt(localStorage.getItem('count'), 10);
             
            
            if (number) {
                this.setState(() => ({count: number})); 
            }
        } catch (e) {
            // do nothin at all 

        }
        
    }
    componentDidUpdate(prevState) {
        if (prevState !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }; 
        }); 
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }; 
        }); 
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
       
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>

        )
    }
}



ReactDOM.render(<Counter />, document.getElementById('app'));