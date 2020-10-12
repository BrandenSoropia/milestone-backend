# Dev Notes

A dump of things I found useful while working on this. (Note to future self, don't be embarrassed by how basic some of this stuff is. I am essentially starting from 0 and trying to learn best practices.)

## DB stuff

[MongoDB naming conventions](https://stackoverflow.com/questions/5916080/what-are-naming-conventions-for-mongodb)

## Node Stuff

[Sharing one DB connection through app: Node magic!](https://stackoverflow.com/a/24634454)

I was running into a weird error where the shareable DB instance wasn't defined whenever trying to access an endpoint. At that time, my server was setup to start server -> attempt to connect to DB. I rearranged that process to connect to DB first then start server following [this](https://stackoverflow.com/questions/42186663/nodejs-wait-for-mongodb-connection-to-be-made-before-creating-http-server).
