from datetime import time, datetime
time1 = time(hour=10, minute=5, second=4)
time2 = time(hour=9, minute=5, second=4)
time3 = time(hour=0, minute=0, second=1)

if time1 > time2:
    print("True")
