---
custom_edit_url: null
id: 09-reset_move
title: reset_move()
---

##### Description

The reset_move command will reset the values of roll, pitch, yaw, and throttle to 0.

##### Syntax
```reset_move()```
```reset_move(attempts)```

##### Parameters

**attempts**: Optional parameter that sends the reset_move command multiple times.

##### Returns

None

##### Example Code
This code will set pitch to 50 and then reset that pitch and allow you to use another movement without having to manually set pitch to 0.
###### Python
```python
#Python code
from codrone_edu.drone import *
drone = Drone()
drone.pair()

drone.takeoff()
drone.set_pitch(50)
drone.move(2)
drone.reset_move()  # reset the pitch to 0.

time.sleep(0.1)    # need a 0.1 second break between a reset move and 
# your next action
drone.set_roll(50)
drone.move(2)
drone.land()
```