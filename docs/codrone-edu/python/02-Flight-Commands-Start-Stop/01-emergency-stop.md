---
custom_edit_url: null
id: 01-emergency_stop
title: emergency_stop()

---

##### Description

This function immediately stops all commands and motors, so the drone will stop flying immediately. The function will also reset the flight motion variables to 0. **NOTE:** If you want to take off and emergency stop, it is recommended to run a ```hover()``` or ```time.sleep()``` in between the ```takeoff()``` and ```emergency_stop()```, because the CoDrone EDU might miss the emergency_stop() command.


##### Syntax
Python: ```emergency_stop()```

##### Parameters

None

##### Returns

None

##### Example Code
This code will make your drone shoot up into the ceiling (A classic error) and then emergency stop. Don't forget to catch it!
###### Python
```python
#Python code
from codrone_edu.drone import *
drone = Drone()
drone.pair()

drone.takeoff()
drone.set_throttle(100)
drone.move(2)
drone.emergency_stop()
```