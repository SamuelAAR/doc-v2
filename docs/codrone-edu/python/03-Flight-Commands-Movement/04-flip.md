---
custom_edit_url: null
id: 04-flip
title: flip()

---

##### Description

Calls sendFlip() command to flip the drone in desired direction.
Options are: "front", "back", "left", and "right". To perform multiple flips, you must have a time.sleep or drone.hover of 3 seconds.


##### Syntax
```flip()```
```flip(direction)```


##### Parameters
**direction**: optional parameter that is the direction the drone will flip. default is "back"


##### Returns

None

##### Example Code
This code will first flip your drone forward then wait 3 seconds before performing a back-flip.
###### Python
```python
#Python code
from codrone_edu.drone import *
drone = Drone()
drone.pair()

drone.takeoff()
drone.flip("front")
time.sleep(3)   # to perform two flips you need either a hover or sleep for 3 seconds
drone.flip("back")
drone.land()
```