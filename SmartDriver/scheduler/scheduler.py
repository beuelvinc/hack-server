from apscheduler.schedulers.background import BackgroundScheduler
from django_apscheduler.jobstores import DjangoJobStore, register_events
from django.utils import timezone
from django_apscheduler.models import DjangoJobExecution
from main_app.models import CarData
from datetime import datetime;
  
# ct stores current time
def insert_carvelocity():
    current = datetime.now().timestamp()
    previous = datetime.now().timestamp()-5

    print(CarData.objects.filter(timestamp__lte=current,timestamp__gte=previous),"---")



def start():
    scheduler = BackgroundScheduler()
    scheduler.add_jobstore(DjangoJobStore(), "default")
    scheduler.add_job(insert_carvelocity, 'interval', minutes=5, name='velocity', jobstore='default')
    register_events(scheduler)
    scheduler.start()
