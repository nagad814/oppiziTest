import React, { Component } from "react";
import { View, Button, Text } from "react-native";
export function formatTime(time) {
  return time;
}
class App extends Component {
  state = {
    status: "Initial",
    time: 0,
    laps: []
  };
  renderButtons = () => {
    const status = this.state.status;
    if (status === "Initial") {
      return <Button title="start" onPress={this.onStart} />;
    }
    if (status === "Stopped") {
      return (
        <View>
          <Button title="resume" onPress={this.resumeTimer} />
          <Button title="reset" onPress={this.resetTimer} />
        </View>
      );
    }
    if (status === "Running") {
      return (
        <View>
          <Button title="stop" onPress={this.resumeTimer} />
          <Button title="lap" onPress={this.resetTimer} />
        </View>
      );
    }
  };
  changeStatus = status => {
    this.setState({ status });
  };
  changeTime = time => {
    this.setState({ time: +time });
  };
  startTimer = () => {};
  resetTimer = () => {
    this.changeStatus("Initial");
    this.changeTime(0);
  };
  resumeTimer = () => {
    this.startTimer();
  };
  onStart = () => {
    this.startTimer();
  };
  runWatch = () => {
    this.watchInterval = window.setInterval(() => {
      this.addTimeBy(100);
    }, 100);
  };
  stopWatch = () => {
    window.clearInterval(this.watchInterval);
  };
  stopTimer = () => {
    this.changeStatus("Stopped");
  };
  addTimeBy = by => {
    this.changeTime(this.state.time + by);
  };
  saveLap = time => {
    this.setState({ laps: [...this.state.laps, time] });
  };
  onLap = () => {};
  render() {
    return (
      <View>
        {this.renderButtons()}
        <Text testID="displayedTime">00:55.00</Text>
      </View>
    );
  }
}

export default App;
