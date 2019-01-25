#stop watch with react-native
Feature: user can start a timer

Scenario Outline: Buttons are displayed only when appropriate
  Given status is "<status>"
  Then displayed buttons are "<displayed_buttons>"

Examples: 
  |status |displayed_buttons|
  |Initial|start            |
  |Running|stop,lap         |
  |Stopped|resume,reset     |

Scenario Outline: Running the timer works well
  Given status is "<status>"
  And the time in the stop watch is <time>
  When user starts the timer
  And time elapses by <elapsed_time>
  Then displayed time is "<displayed_time>"

Examples: 
  |status |time|elapsed_time|displayed_time|
  |Initial|0   |55000          |00:55.00      |
  |Initial|0   |65500        |01:05.50       |
  |Stopped|60000  |20000          |01:20.00      |
  
Scenario Outline: Stopping the time works well
  Given status is "Running"
  And the time in the stop watch is <time>
  And there are <laps_no_before> laps
  When user stops the timer
  And time elapses by <elapsed_time>
  Then displayed time is "<displayed_time>"
  And there should be <laps_no_after> laps

Examples:
  |time |laps_no_before|laps_no_after|displayed_time|elapsed_time|
  |1000 |0             |0            |00:01.00      |1000        |
  |60000|3             |3            |01:00.00      |2000        |

Scenario Outline: Resetting the timer works well
  Given status is "Stopped"
  And the time in the stop watch is <time>
  And there are <laps_no_before> laps
  When user resets the timer
  Then displayed time is "<displayed_time>"
  And there should be <laps_no_after> laps
  

Examples: 
  |time    |laps_no_before|displayed_time|laps_no_after|
  |2000  |0             |00:00.00      |0            |
  |25500 |1             |00:00.00      |0            |
  |20000 |3             |00:00.00      |0            |

Scenario Outline: Resuming the timer works well
  Given status is "Stopped"
  And the time in the stop watch is <time>
  And there are <laps_no_before> laps
  When user resumes the timer
  And time elapses by <elapsed_time>
  Then displayed time is "<displayed_time>"
  And there should be <laps_no_after> laps
  

Examples: 
  |time     |laps_no_before|elapsed_time|displayed_time|laps_no_after|
  |2000   |0             |30000          |00:32.00      |0            |
  |25500  |1             |100000         |02:05.50      |1            |
  |200000 |3             |120200       |05:20.20      |3            |

Scenario Outline: Clicking on lap starts a new lap and saves the current time
  Given status is "Running"
  And the time in the stop watch is <time>
  And there are <laps_no_before> laps
  When user laps the timer
  And time elapses by <elapsed_time>
  Then displayed time is "<displayed_time>"
  And there should be <laps_no_after> laps

Examples:
  |time     |laps_no_before|elapsed_time|displayed_time|laps_no_after|
  |2000   |0             |30000          |00:30.00      |1            |
  |25500  |1             |100000         |01:40.00      |2            |
  |200000 |3             |120200       |02:00.20      |4            |
