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
Your drone will pair using the "drone.pair()", then congratulate you on your successful pairing by screen printing YAY and flipping.
###### Python
```python
#Python code
from codrone_edu.drone import *
import random

drone = Drone()
drone.pair()

drone.controller_clear_screen()
for i in range(1, 200):
    random_number = random.randint(1, 110)
    random_number2 = random.randint(1, 60)
    drone.controller_draw_string(random_number, random_number2, "YAY")
    print(random_number)

drone.takeoff()
drone.flip("back")
drone.land()
```