import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Timer, SuccessText } from "./styled";

class Counter extends Component {

  state = {
    success: false,
    time: {},
    from: 0,
    to: 0,
  };

  countTime = (sec) => {
    let days = Math.floor(sec / (3600 * 24));
    let hours = Math.floor(sec % (3600 * 24) / 3600);
    let minutes = Math.floor(sec % 3600 / 60);

    let obj = {
      'd': days,
      'h': hours,
      'm': minutes,
    };
    return obj;
  };

  countDown = () => {
    let seconds = this.state.from - 1;
    this.setState({
      time: this.countTime(seconds),
      from: seconds,
    });

    if (seconds <= this.state.to) {
      clearInterval(this.timer);
      this.setState({success: true})
    }
  };

  startTimer = (sec) => {
    if (sec >= this.state.to) {
      this.timer = setInterval(this.countDown, 1000);
      this.setState({
        success: false,
      });
    }
  };

  componentDidMount() {
    const startDate = new Date();
    const endDate = new Date(this.props.time);
    const timeInSec = (endDate.getTime() - startDate.getTime()) / 1000;

    if (timeInSec <= 0) {
      this.setState({success: true})
    }

    this.setState({from: timeInSec, time: this.countTime(this.state.from)});
    this.startTimer(this.state.from)
  }

  render() {
    const {time, success} = this.state;
    return (
      <Wrapper>
        <Timer>
          {time.d && time.d > 0 ? <span>{time.d} days </span> : null}
          {time.h && time.h > 0 ? <span>{time.h} hours </span> : null}
          {time.m && time.m > 0 ? <span>{time.m} minutes to start</span> : null}
        </Timer>
        {success && <SuccessText>Already launched</SuccessText>}
      </Wrapper>
    );
  }
}

Counter.propTypes = {
  time: PropTypes.string,
};

Counter.defaultProps = {
  time: null,
};

export default Counter;