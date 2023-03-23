import { PropTypes } from "prop-types";
import { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

export class Modal extends Component {
  handleKeyDown = (event) => {
    if (event.key === "Escape") {
      console.log(event);
      this.props.onModalClose();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    document.body.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    document.body.style.overflow = 'auto'
  }

  handleBackdropClose = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onModalClose();
    }
  };

  render() {
    const { children, onModalClose } = this.props;

    const jsx = (
      <>
        <div className="modal-backdrop fade show" />
        <div
          className="modal fade show"
          style={{ display: "block" }}
          onClick={this.handleBackdropClose}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={onModalClose}
                />
              </div>

              <div className="modal-body">{children}</div>
            </div>
          </div>
        </div>
      </>
    );

    return createPortal(jsx, modalRoot);
  }
}

// export const Modal = ({ children, onModalClose }) => {

//   const handleBackdropClose = (event) => {
//     if (event.target === event.currentTarget) {
//       onModalClose()
//     }
//   }

//   return (
//     <>
//       <div className="modal-backdrop fade show" />

//       <div className="modal fade show" style={{ display: 'block' }} onClick={handleBackdropClose}>
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Modal title</h5>
//               <button type="button" className="btn-close" aria-label="Close" onClick={onModalClose} />
//             </div>

//             <div className="modal-body">{children}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

Modal.propType = {
  children: PropTypes.node.isRequired,
};
