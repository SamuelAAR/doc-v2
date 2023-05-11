---
custom_edit_url: null
id: 07-stop_motors
title: stop_motors()

---

##### Description

This function immediately stops all commands and motors, so the drone will stop flying immediately. The function will also reset the flight motion variables to 0. **NOTE:** If you want to take off and stop_motors, it is recommended to run a ```hover()``` or ```time.sleep()``` in between the ```takeoff()``` and ```stop_motors()```, because the CoDrone EDU might miss the stop_motors() command.


##### Syntax
Python: ```stop_motors()```

##### Parameters

None

##### Returns

None

##### Example Code
This code takes off and moves forward before hovering because it is recommended to hover before a stop motor command. This code also shows no other command can be read after the stop motor.
###### Python
```python
#Python code
from codrone_edu.drone import *
drone = Drone()
drone.pair()

drone.takeoff()
drone.go(0, 20, 0, 0, 2)
drone.hover(3)  # Recommended to have a hover() or time.sleep(1) before landing
drone.stop_motors()
drone.go(0, 20, 0, 0, 2)
```