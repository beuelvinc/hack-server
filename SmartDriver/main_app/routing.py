from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from django.urls import path
from .consumer import DashConsumer

websocket_urlPattern = [
    #In routing.py, "as_asgi()" is required for versions over python 3.6.
    path('ws/insert', DashConsumer.as_asgi()), # add ws for prefix.
]

