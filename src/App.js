import "./App.css";
import * as React from "react";

const App = () => {
  const [number, setNumber] = React.useState(0);

  const increse = () => {
    tack.current.focus();
    return setNumber(number + 1);
  };

  const decrese = () => setNumber(number - 1);
  const sayHello = () => console.log("yeah");

  React.useEffect(sayHello, [number]);

  const tack = React.useRef();

  return (
    <div className="App">
      <div> Test</div>
      <div>{number}</div>
      <button onClick={increse} ref={tack}>
        올라감
      </button>
      <button onClick={decrese}>내려감</button>
    </div>
  );
};

// class AppFucking extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       item: 0,
//     };
//   }

//   render() {
//     const {item} = this.state;
//     return (
//       <div className="App">
//         <div> Test</div>
//         <div>{item}</div>
//         <button onClick={this.increse2}>올라감</button>
//         <button onClick={this.decrese2}>내려감</button>
//       </div>
//     );
//   }

//   increse2 = () => {
//     this.setState((state) => {
//       return {
//         item: state.item + 1,
//       };
//     });
//   };

//   decrese2 = () => {
//     this.setState((state) => {
//       return {
//         item: state.item - 1,
//       };
//     });
//   };
// }

export default App;
