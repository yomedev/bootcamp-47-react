import { useEffect, useRef, useState } from "react";
import { FaPlay, FaStop } from "react-icons/fa";

const ONE_SECOND = 1000;

const formatTime = (time) => {
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

export const TimerModal = () => {
  const [time, setTime] = useState(new Date());
  const intervalIdRef = useRef(null);

  const handleStartTimer = () => {
    if (!intervalIdRef.current) {
      intervalIdRef.current = setInterval(() => {
        setTime(new Date());
      }, ONE_SECOND);
    }
  };

  const handleStopTimer = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
      <h2 className="h1 m-5">{formatTime(time)}</h2>
      <div className="d-flex flex-row gap-5">
        <button onClick={handleStartTimer} className="btn btn-outline-light">
          <FaPlay />
        </button>
        <button onClick={handleStopTimer} className="btn btn-outline-light">
          <FaStop />
        </button>
      </div>
    </div>
  );
};

// export class TimerModal extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log("interval");
//       this.setState({ time: new Date() });
//     }, ONE_SECOND);
//   }

//   componentWillUnmount() {
//     console.log("clearInterval");
//     if (this.intervalId) {
//       clearInterval(this.intervalId);
//     }
//   }

//   formatTime() {
//     const { time } = this.state;

//     const hours = String(time.getHours()).padStart(2, "0");
//     const minutes = String(time.getMinutes()).padStart(2, "0");
//     const seconds = String(time.getSeconds()).padStart(2, "0");

//     return `${hours}:${minutes}:${seconds}`;
//   }

//   render() {
//     return (
//       <div className="d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
//         <h2 className="h1 m-5">{this.formatTime()}</h2>
//         <div className="d-flex flex-row gap-5">
//           <button className="btn btn-outline-light">
//             <FaPlay />
//           </button>
//           <button className="btn btn-outline-light">
//             <FaStop />
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
