import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction } from "../../../redux/counter/counterActions";

// useSelector (selector) {
//  return selector(store.getState())
// }

export const CounterPage = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <h2 className="text-center">Total</h2>
      <p className="text-center my-4" style={{ fontSize: 60 }}>
        {counter}
      </p>
      <div className="d-flex align-items-center justify-content-center w-100">
        <button
          className="position-relative btn p-4 btn-outline-light mx-5"
          type="button"
          name="plus"
          onClick={() => dispatch(incrementAction(10))}
        >
          <FiThumbsUp className="fs-2" />
        </button>

        <button
          className="btn p-4 btn-outline-light mx-5 position-relative"
          type="button"
          name="minus"
          onClick={() => dispatch(decrementAction(10))}
        >
          <FiThumbsDown className="fs-2" />
        </button>
      </div>
    </div>
  );
};
