import { useEffect, useState } from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

//likes => likes + 1
// const setState = (param) => {
//   if (typeof param === "function") {
//     const newState = param(3); // 4
//   }
// };

// const state = [];

// state.push(3);
// state.push(4);

// [4, 4]

// if (typeof initialState === 'function') {
//   const firstState = initialState()
// }

const COUNTER_LOCALE_STORAGE_KEY = "counter";

const getLocalData = () => {
  console.log("getLocalData");
  return JSON.parse(localStorage.getItem(COUNTER_LOCALE_STORAGE_KEY));
};

export const Counter = ({defaultValue = 0}) => {
  const [likes, setLikes] = useState(() => getLocalData()?.likes ?? defaultValue);
  const [dislikes, setDislikes] = useState(() => getLocalData()?.dislikes ?? defaultValue);
  // const [likes, setLikes] = useState(3);
  // const [dislikes, setDislikes] = useState(4);

  useEffect(() => {
    localStorage.setItem(
      COUNTER_LOCALE_STORAGE_KEY,
      JSON.stringify({ likes, dislikes })
    );
  }, [likes, dislikes]);

  const total = likes - dislikes;

  const handleUpdate = (event) => {
    const { name } = event.currentTarget;
    switch (name) {
      case "likes":
        setLikes((likes) => likes + 1);
        break;
      case "dislikes":
        setDislikes((dislikes) => dislikes + 1);
        break;
      default:
        throw new Error("Name doesn't exist");
    }
  };

  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <h2 className="text-center">Total</h2>
      <p className="text-center my-4" style={{ fontSize: 60 }}>
        {total}
      </p>
      <div className="d-flex align-items-center justify-content-center w-100">
        <button
          className="position-relative btn p-4 btn-outline-light mx-5"
          type="button"
          name="likes"
          onClick={handleUpdate}
        >
          <span className="position-absolute top-0 start-0 translate-middle px-3 py-2 fs-5 fw-bold border border-light border-2 rounded-circle bg-dark text-light">
            {likes}
          </span>
          <FiThumbsUp className="fs-2" />
        </button>

        <button
          className="btn p-4 btn-outline-light mx-5 position-relative"
          type="button"
          name="dislikes"
          onClick={handleUpdate}
        >
          <span className="position-absolute top-0 start-100 translate-middle px-3 py-2 fs-5 fw-bold border border-light border-2 rounded-circle bg-dark text-light">
            {dislikes}
          </span>
          <FiThumbsDown className="fs-2" />
        </button>
      </div>
    </div>
  );
};

// export class Counter extends Component {
//   state = {
//     likes: 0,
//     dislikes: 0,
//   };

//   handleUpdate = (event) => {
//     const { name } = event.target;
//     this.setState((prev) => ({ [name]: prev[name] + 1 }));
//   };

//   getTotal() {
//     const {likes, dislikes} = this.state
//     return likes - dislikes;
//   }

//   render() {
//     const { likes, dislikes } = this.state;
//     return (
//       <div className="mb-5 p-5 text-white bg-dark rounded-3">
//         <h2 className="text-center">Total</h2>
//         <p className="text-center my-4" style={{ fontSize: 60 }}>
//           {this.getTotal()}
//         </p>
//         <div className="d-flex align-items-center justify-content-center w-100">
//           <button
//             className="position-relative btn p-4 btn-outline-light mx-5"
//             type="button"
//             name="likes"
//             onClick={this.handleUpdate}
//           >
//             <span className="position-absolute top-0 start-0 translate-middle px-3 py-2 fs-5 fw-bold border border-light border-2 rounded-circle bg-dark text-light">
//               {likes}
//             </span>
//             <FiThumbsUp className="fs-2" />
//           </button>

//           <button
//             className="btn p-4 btn-outline-light mx-5 position-relative"
//             type="button"
//             name="dislikes"
//             onClick={this.handleUpdate}
//           >
//             <span className="position-absolute top-0 start-100 translate-middle px-3 py-2 fs-5 fw-bold border border-light border-2 rounded-circle bg-dark text-light">
//               {dislikes}
//             </span>
//             <FiThumbsDown className="fs-2" />
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
