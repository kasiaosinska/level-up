import React, { Component } from 'react';
import { Wrapper, Button, Timer, SuccessText } from "./styled";

class Counter extends Component {

  state = {
    success: false,
    time: {},
    from : 5,
    to: 0,
  };

  countTime = (sec) => {
    let hours = Math.floor(sec / (60 * 60));
    let minutes = Math.floor(sec % 3600 / 60);
    let seconds = Math.floor(sec % 3600 % 60);

    let obj = {
      'h': hours,
      'm' : minutes,
      's' : seconds,
    };
    return obj;
  };

  componentDidMount() {
    this.setState({time: this.countTime(this.state.from)})
  }

  startTimer = () => {
    if (this.state.from >= this.state.to) {
      this.timer = setInterval(this.countDown, 1000);
      this.setState({
        success: false,
      });
    }
  };

  countDown = () => {
    let seconds = this.state.from - 1;
    this.setState({
      time: this.countTime(seconds),
      from: seconds,
    });

    if (seconds === this.state.to) {
      clearInterval(this.timer);
      this.onSuccess();
    }
  };

  onReset = () => {
    this.setState({
      time: this.countTime(this.state.from),
    })
  }

  onSuccess = () => {
    this.setState({
      success: true,
      from: 5,
    });
    setTimeout(this.onReset, 1000)
  };

  render() {
    const { time, success } = this.state;
    return (
      <Wrapper>
        <h3>Counter - Praca domowa 2</h3>
        <div>
          <Button onClick={this.startTimer}>Start</Button>
          <Timer>
            {time.h && time.h > 0 ? <span>{time.h} hours </span> : null}
            {time.m && time.m > 0 ? <span>{time.m} minutes </span> : null}
            {time.s && time.s > 0 ? <span>{time.s} seconds </span> : null}
          </Timer>
        </div>
        {success && <SuccessText>Odliczanie zakończone. Kliknij ponownie start aby rozpocząć odliczanie.</SuccessText>}
       </Wrapper>
    );
  }
}

export default Counter;