Monolith and microservice architecture 

In the whole java application they used monolith architecture everything inside that app 

For example:
1-UI Part 
2-DataLayer
3-Api Connection
4-Authentication part
5.Db Connection 
6.SMS Sending Codes

if i waana change something means i need to compile all these stuffs and need to deploy again such a bulky process.

Microservice Architecture 

1.How these services interact with each other?
-1.1 The UI service will interact with backend layer , auth layer , notifications layer.
-1.2 The backend service will interact with db layer.

2. How are these services deployed ?
-2.1 The react project that we are making is UI Microservice which written in Reactjs.
-2.2 In microservice architecture we can have different tech stack for different services.
-2.3 In this microservice architecture each services deployed and run on their own ports for example ui service run on port 5173 and so on.

There are 2 types of routing in web apps

1. Client Side Routing 
2. Server Side Routing 