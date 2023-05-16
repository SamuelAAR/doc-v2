---
custom_edit_url: null
id: 07-move
title: move()
---

##### Description

The move command will move the drone based on the set flight variables (set_pitch, set_roll, etc). If given a parameter the move command will execute the movement for the given amount of seconds.
If given no parameter then the drone will execute the move command indefinitely. You must takeoff() first to use a move() function. Note that if you want to move another direction after your first move to set that direction back to 0 with a move underneath it.

##### Syntax
```move(duration)```

##### Parameters

**duration**: Duration of the movement

##### Returns

None

##### Example Code
This code will make the drone fly forward before setting the pitch to 0 and having it spin before landing.
###### Python
```python
#Python code
from codrone_edu.drone import *
drone = Drone()
drone.pair()

drone.takeoff()
# Drone goes forward for 1 second with 50 power
drone.set_pitch(50)
drone.move(1)   # move command executes the movement for 1 second

drone.set_pitch(0)  # make sure to set the pitch back to 0 if you want drone to move another way
drone.set_yaw(70)
drone.move(4)
drone.land()
```