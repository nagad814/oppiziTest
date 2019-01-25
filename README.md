In this challenge, we want to have an idea about your ability to quickly grasp new concepts, understand requirements, write clean code and fix bugs.
You might want to read about Cucumber to get an idea how the tests work. But don't waste too much time on that. https://docs.cucumber.io/guides/overview/ 

The features are described in `features/stop_watch.feature` file.

We're going to build a stop watch similar to the default one on Android devices.
There are 2 goals:
- build a working stop watch.
- get the maximum number of test scenarios to pass within the timeframe

`features/step_definitions/stepdefs.js` contains individual steps that compose the scenarios.

Useful commands:
- `yarn test` to run all the test scenarios
- `yarn test features/stop_watch.feature:43` to run the scenario at line 43

Feel free to change the step definitions `features/step_definitions/stepdefs.js` as you see fit. It depends on the way you implement the features.

Optional:
We want to add a new feature to our app. We would like to limit the number of laps to 3, when the user reaches 3 laps, the lap button will be hidden.
Don't forget to add a scenario for this feature.
It would be nice to make things look a bit better as well.
