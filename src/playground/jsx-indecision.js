

var app = {
    title: 'Indecision App', 
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault(); 

    const option = e.target.elements.option.value; 
    if (option) {
        app.options.push(option); 
        e.target.elements.option.value = ''; 
        renderIndecision()
    }; 
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length); 
    const option = app.options[randomNum];
    alert(option); 
}; 

const wipeList = () => {
    app.options = []
    renderIndecision()
}; 

const appRoot = document.getElementById('app');

const renderIndecision = () => {
    var template = (
    <div>
        <h1>{app.title}</h1> 
        {(app.subtitle) && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? <p>These are your options:</p> : <p>No options...yet</p>}
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
        <button onClick={wipeList}>Remove All</button>
    
        <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>
                })
            }  
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
);

ReactDOM.render(template, appRoot); 
}; 
//




renderIndecision(); 