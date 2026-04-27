import time
from datetime import datetime

print("Cron job container started!")

while True:
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{current_time}] Job successfully executed")
    time.sleep(60)