import { Component } from "react";

// addEventListener('click', (event) => {})

// const key = 'name'

// const person = {
//   name: 'Bob',
//   age: 25
// }

// const value = person[key]

export class Counter extends Component {
  state = {
    plus: 0,
    minus: 0,

  };

  handleMinus = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  handlePlus = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  handleUpdate = (event) => {
    const { name } = event.target;
    this.setState((prev) => ({ [name]: prev[name] + 1 }));
  };

  getCounter() {
    return this.state.plus - this.state.minus
  }

  render() {
    // const { plus, minus } = this.state;

    return (
      <div className="mb-5 p-5 text-white bg-dark rounded-3">
        <h2 className="text-center">Counter</h2>
        <p className="text-center my-5" style={{ fontSize: 80 }}>
          {this.getCounter()}
        </p>

        <div className="d-flex align-items-center justify-content-center w-100">
          <button
            name="minus"
            onClick={this.handleUpdate}
            className="btn p-3 btn-outline-light w-25 mx-2"
            type="button"
          >
            Minus
          </button>

          <button
            name="plus"
            onClick={this.handleUpdate}
            className="btn p-3 btn-outline-light w-25 mx-2"
            type="button"
          >
            Plus
          </button>
        </div>
      </div>
    );
  }
}

// export const Counter = ({defaultValue}) => {
//   return (
//     <div className="mb-5 p-5 text-white bg-dark rounded-3">
//       <h2 className="text-center">Counter</h2>
//       <p className="text-center my-5" style={{ fontSize: 80 }}>
//         0
//       </p>

//       <div className="d-flex align-items-center justify-content-center w-100">
//         <button className="btn p-3 btn-outline-light w-25 mx-2" type="button">
//           Minus
//         </button>

//         <button className="btn p-3 btn-outline-light w-25 mx-2" type="button">
//           Plus
//         </button>
//       </div>
//     </div>
//   );
// };
