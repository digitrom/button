import React from 'react';
import './App.css';
import Button from "./Button";


function App() {
    const func1 = (name:string, age: number) => {
    console.log(name, age)
    }
    return (
        <div className="App">
            <Button name={"Roman"} callBack={() => func1("Roman", 37)}/>
        </div>
    );
}

export default App;
