---
custom_edit_url: null
id: 03-detect_wall
title: detect_wall()

---

##### Description

Returns True when a distance below the threshold is reached. The range of front sensor is from 0mm-1000mm (0cm-100cm)


##### Syntax
```detect_wall()```
```detect_wall(distance)```

##### Parameters
**distance**: An optional parameter that is the threshold in millimeters that will return True. The default value is 500

##### Returns

None

##### Example Code
This code will detect a wall in the range of 500mm, once detected it will run through the 'if' loop setting off the 'for' loop making the LED flash. 
###### Python
```python
#Python code
from codrone_edu.drone import *
drone = Drone()
drone.pair()

drone.drone_LED_off()
drone.takeoff()
# if a wall is detected in less than 500mm true will be returned.
if drone.detect_wall():
    drone.hover(1)
    print("wall detected!")
    for i in range(1, 20):
        drone.drone_LED_off()
        drone.set_drone_LED(255, 0, 0, 255)
        time.sleep(0.1)

drone.land()
```