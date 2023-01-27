import React, {MouseEvent} from 'react';
import './App.css';



function App() {
  // const myFirstSubscriber = (e:MouseEvent<HTMLButtonElement>) => {
  //     console.log("Hello Roma!") }
  //   const mySecondSubscriber = (e:MouseEvent<HTMLButtonElement>) => {
  //     console.log("Hello Ivan!") }
  //   const names = [
  //       { name1: "Roma", name2: "Ivan"}
  //   ]
  //
  //   const onClickHandler = (name: string) => {
  //        console.log(name)
  //   }
const foo1 = () => {
    console.log(100200)
}
const foo2 = (num: number) => {
    console.log(num)
}


  return (
    <div className="App">
     {/*<button onClick={() => {console.log("Hello Roma!") }}>MyYouTubeChannel</button>*/}

     {/*<button onClick={(e:MouseEvent<HTMLButtonElement>) => onClickHandler("Roma")}>MyYouTubeChannel-1</button>*/}
     {/*<button onClick={(e:MouseEvent<HTMLButtonElement>) => onClickHandler("Ivan")}>MyYouTubeChannel-2</button>*/}
     {/*<button onClick={() => onClickHandler("some info")}>MyYouTubeChannel-3</button>*/}
        <button onClick={foo1}>1</button>
        <button onClick={() => foo2(100200)}>2</button>
    </div>
  );
}

export default App;
