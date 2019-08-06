1. Mention two parts of Express that you learned about this week.

 - routers--a way to contain route handlers to a specific path
 - Request/Response objects--req used to examine the data sent to the backend, response
   is used to reply to the requester

2. Describe Middleware?

Middleware is functionality that is ran between a route handler function and the
response to that requester. It allows you to modify the request data or restrict
access depending on its functionality.

3. Describe a Resource?

A resource is some sort of data typically represented in the backend's database
that the servers we write send back to the requesters.

4. What can the API return to help clients know if a request was successful?

The appropriate HTTP status codes can represent successful or failure requests.
For example, a 2xx status code means the request was successful, while 4xx and
5xx means there was some sort of failure. 

5. How can we partition our application into sub-applications?

This can be done with the help of routers as described above.