import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount, shallow } from "enzyme";
import { Before, Given, When, After, Then } from "cucumber";
import sinon from "sinon";
import App, {formatTime} from "../../src/App";
import { expect, assert } from "chai";
import lolex from "lolex"
import React from "react";
/* * * * * * * ** * * ** * * ** * * ** * * ** * * ** * * ** * * **/
Before(function() {
  this.StopWatch = shallow(<App />);
  this.clock = sinon.useFakeTimers({ global: window});
});
After(function() {
  this.StopWatch.instance().stopWatch()
  this.clock = sinon.restore();
});
Given("status is {string}", function(status) {
  const instance = this.StopWatch.instance();
  if (status === "Running") {
    instance.startTimer()
    instance.changeStatus("Running");
  } else if (status === "Stopped") {
    instance.changeStatus("Stopped");
  }
});

Then("displayed buttons are {string}", function(displayedButtons) {
  displayedButtons.split(",").forEach(button => {
    expect(
      this.StopWatch.find("Button")
        .find({
          title: button
        })
        .exists()
    ).to.equal(true);
  });
});
Given("the time in the stop watch is {int}", function(time) {
  this.StopWatch.instance().changeTime(time);
});
When("user starts the timer", function() {
  this.StopWatch.instance().startTimer();
});
When("user stops the timer", function() {
  this.StopWatch.instance().stopTimer();
});

Then("displayed time is {string}", function(displayedTime) {
  expect(
    this.StopWatch.find({ testID: "displayedTime" }).exists(),
    "time is not displayed!"
  ).to.equal(true);
  expect(
    this.StopWatch.find({ testID: "displayedTime" })
      .dive()
      .text()
  ).to.equal(displayedTime);
});

Then("there should be {int} laps", function(lapsCount) {
  expect(this.StopWatch.state().laps.length).to.equal(lapsCount);
});
When("user resets the timer", function() {
  this.StopWatch.instance().resetTimer();
});
When("there are {int} laps", function(lapsCount) {
  for (let i = 0; i < lapsCount; i++) {
    this.StopWatch.instance().saveLap(i * 7 * 10000);
  }
});

When("user resumes the timer", function(){
  this.StopWatch.instance().resumeTimer()
})

When("time elapses by {int}", function(elapsedTime){
  this.clock.tick(elapsedTime)
})

When("user laps the timer", function(){
  this.StopWatch.instance().onLap()
})

