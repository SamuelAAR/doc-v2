---
custom_edit_url: null
id: 06-keep_distance
title: keep_distance()

---

##### Description

A looped method that makes the drone fly forward until it reaches a desired distance. Once the desired distance in reached the drone will maintin that distance.
The range of front sensor is from 0mm-1000mm (0cm-100cm)


##### Syntax
```keep_distance()```
```keep_distance(timeout)```
```keep_distance(distance)```
```keep_distance(timeout, distance)```

##### Parameters
**timeout**: timeout is an optional parameter that is the duration in seconds that the function will run. The default value is 2 <br />
**distance**: distance is an optional parameter that is the distance in millimeters the drone will stop and maintin distance in front of an object. The default value is 500

##### Returns

None

##### Example Code
This code will make your drone go forward then hover before keeping its distance from the closest object. You can even try putting your hand in front of it and see what happens!
###### Python
```python
#Python code
from codrone_edu.drone import *
drone = Drone()
drone.pair()

drone.takeoff()
drone.go(0, 50, 0, 0, 2)
drone.hover(1)
# fly forward until a wall is found. maintain a distance
# of 600mm (60cm) from an object once detected.
# run this loop for 10 seconds.
drone.keep_distance(15, 600)
drone.land()
```