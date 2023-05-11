---
custom_edit_url: null
id: 05-take_off
title: takeoff()
---

##### Description

This function makes the drone takeoff and hover.<br />
The drone will always hover for 1 second in order to stabilize before it executes the next command.<br />

##### Syntax
```takeoff()```

##### Parameters

None

##### Returns

None

##### Example Code
This code will make the drone take off and get what's called its flight state. If it is successfully flying, it will say "flight". Once it lands it will say, "Ready" or "Landing".
###### Python
```python
#Python code
from codrone_edu.drone import *
drone = Drone()
drone.pair()

drone.takeoff()

drone.get_flight_state()
print(drone.get_flight_state(), "This means I'm flying!")
drone.hover(3)
drone.land()

drone.get_flight_state()
print(drone.get_flight_state(), "Now I'm read to take off again!")
```