---
custom_edit_url: null
id: 05-hover
title: hover()
---

##### Description

This function makes the drone hover for a given amount of time. If given no parameters, it will hover indefinitely until given a another command.


##### Syntax
```hover(duration)```

##### Parameters

**duration**: Duration of the hovering in seconds

##### Returns

None

##### Example Code
This code will first hover your drone, then command it to go forward before hovering again showing if you don't want your drone to hover indefinitely you need another action afterwards.
###### Python
```python
#Python code
from codrone_edu.drone import *
drone = Drone()
drone.pair()

drone.takeoff()
drone.hover(2)
drone.go(0, 50, 0, 0, 1)
drone.hover(3)
drone.land()
```