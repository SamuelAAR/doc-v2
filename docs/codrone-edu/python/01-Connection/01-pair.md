---
custom_edit_url: null
id: 01-pair
title: pair()
taxonomy:
    tag: CDE-library
    category: other
menu: pair()
---

##### Description

This function connects your controller with the program. You can also set the specific USB port name.

##### Syntax
```pair()```<br />
```pair(portname)```<br />


##### Parameters
**portname**: A string containing the port name or number.


##### Returns
None

##### Example Code
Your drone will pair using the "drone.pair()", then only will it congratulate you.
###### Python
```python
#Python code
from codrone_edu.drone import *
drone = Drone()
drone.pair()

if drone.pair():
    print("Yay, Im connected!")

drone.takeoff()
drone.flip()
drone.land()

print("Disconnecting!")

```