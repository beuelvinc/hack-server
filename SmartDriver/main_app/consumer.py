from channels.generic.websocket import AsyncJsonWebsocketConsumer
from .models import CarData
from auth_app.models import User
import json
import base64
from asgiref.sync import sync_to_async
from  rest_framework_simplejwt.tokens import AccessToken


class DashConsumer(AsyncJsonWebsocketConsumer):

    async def connect(self):
        self.groupname='dashboard'
        await self.channel_layer.group_add(
            self.groupname,
            self.channel_name,
        )

        await self.accept()

    async def disconnect(self,close_code):
        await self.channel_layer.group_discard(
            self.groupname,
            self.channel_name
        )   

    @sync_to_async
    def aync_create(self,user_id,timestamp,x,y,z):
        try:
            CarData.objects.create(user_id=user_id,timestamp=timestamp,x=x,y=y,z=z)
            print("created")
            return 1
        except:
            return 0


    async def receive(self, text_data):
        datapoint = json.loads(text_data)
        token=datapoint.get('token')
        timestamp=datapoint.get("timestamp")
        x=datapoint.get("x")
        y=datapoint.get("y")
        z=datapoint.get("z")
        if token:
            
            access_token = AccessToken(token)
            if access_token:
                user_id=access_token.get('user_id')
                print(user_id,x,y,z)
                await self.aync_create(user_id,timestamp,x,y,z)
                await self.channel_layer.group_send(
                    self.groupname,
                    {
                        'type':'deprocessing', #function name to run
                        'value':json.dumps(datapoint.pop("token"))  #value to send function
                    }
                )
        else:
            print("no token")

    async def deprocessing(self,event):
        valOther=event['value']
        await self.send(text_data=json.dumps({'data':valOther}))# send for frontend