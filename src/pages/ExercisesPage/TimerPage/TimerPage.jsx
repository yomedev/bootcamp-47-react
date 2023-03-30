import { Component } from 'react';

import { Modal } from '../../../components/Modal';

import { TimerModal } from '../../../components/Timer/TimerModal';

export class TimerPage extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div className="d-flex my-5">
        <button type="button" className="btn btn-primary my-5" onClick={this.toggle}>
          Open timer
        </button>

        {isOpen && (
          <Modal onModalClose={this.toggle}>
            <TimerModal />
          </Modal>
        )}
      </div>
    );
  }
}