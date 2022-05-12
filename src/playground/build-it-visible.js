// const app = {
//     title: "Visibility Toggle", 
//     isVisible: false
// }; 

// const toggleDetails = () => {
//     app.isVisible = !app.isVisible;
//     render()
// }; 

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//     <div>
//         <h1>{app.title}</h1> 
//         <button id="button" onClick={toggleDetails}>{!app.isVisible ? "Show Details" : "Hide Details"}</button>
//         {app.isVisible === true ? <p>Here are some details</p> : null}
//     </div>
// );

// ReactDOM.render(template, appRoot); 
// }; 

// render()

//
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props); 
        this.toggleDetails = this.toggleDetails.bind(this)
        this.state = {
            isVisible: false 
        };
    }
    toggleDetails() {
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
            }
        })
    }
    render() {
        return (
        <div>
            <h1>Visibility</h1> 
            <button id="button" onClick={this.toggleDetails}>{!this.state.isVisible ? "Show Details" : "Hide Details"}</button>
            {this.state.isVisible === true ? <p>Here are some details</p> : null}
        </div>
        )
        
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))