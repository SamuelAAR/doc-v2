---
custom_edit_url: null
id: 08-print_move_values
title: print_move_values()
---

##### Description

Prints the current values of roll, pitch, yaw, and throttle flight variables.

##### Syntax
```print_move_values()```

##### Parameters

None

##### Returns

None

##### Example Code
This code will generate separate random numbers for both pitch and roll and then print those two values.
###### Python
```python
#Python code
from codrone_edu.drone import *
drone = Drone()
import random
random_number = random.randint(10, 100)
drone.pair()

drone.takeoff()
drone.set_pitch(random_number)
random_number = random.randint(10, 100)
drone.set_roll(random_number)
drone.print_move_values()  # will print pitch and roll at the random
# number and throttle and yaw at 0
drone.land()
```