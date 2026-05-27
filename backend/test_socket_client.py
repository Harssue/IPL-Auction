import socketio
import time

sio = socketio.Client(logger=True, engineio_logger=True)

@sio.event
def connect():
    print("Connected to server!")
    sio.disconnect()

@sio.event
def connect_error(err):
    print("Connection failed!", err)

@sio.event
def disconnect():
    print("Disconnected from server")

sio.connect('http://localhost:8000')
sio.wait()
