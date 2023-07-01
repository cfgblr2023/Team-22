Video Chat Room
================

A simple WebRTC video chat room with signaling server made using python Flask.

Create and join video chat rooms. The users get connected directly to each other in a peer to peer mesh network using WebRTC. They share their audio and video directly with each other without going through a centralized server. However, a centralized server is needed to initiate the connections at first using a process called signaling. This, signaling server is made using Flask in python and data is shared between server and clients using SocketIO.
