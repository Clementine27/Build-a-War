back-end deals with processing requests sent to the server

back-end include 3 parts: 
- server: the computer 
- app: the application that listens to request, fetch info from database, & send response to client 
- database: deals with data 


----
HTTP: structured request sent to the server asking it to do sth

*structure includes:* 
- request line: action verb + resource path + protocol version 
    e.g. GET /index.html/1.1
- headers: metadata about request, often includes
    - host: domain name of server
    - user-agent: whos the client (firefox or chrome)
    - accept: what format of content can the client handle (json, html, )
    - authorisation: authentication credentials if the client is trying to access sensitive data 
- body: data sent to server 
    e.g. when request to login, password & username is there in the body 

*when received, the server can either*
    - deny with explanation 
    - or accept with 
        - status code 
            404 not found 
            200 ok 
            500 internal server error 
        - response header
        - response body: requested resource 
            i.e. json file, image


*different verbs*
GET: Retrieves data from the server (e.g., loading a webpage).
POST: Sends data to the server.
PUT: Updates existing data on the server.
DELETE: Removes specified data from the server.
HEAD: Retrieves only headers of a resource, without the actual content.
PATCH: Applies partial modifications to a resource.
OPTIONS: Describes communication options available for a resource.

*how it works* 
url into browser (https://www.codecademy.com/article/what-is-http)-> browser check what internet protocol to follow (http or https) -> browser gets the domain name (www.codecademy.com) -> browser asks DNS (domain name server) what is the IP address of the server that I want info from -> browser opens a connection to the server -> create an http request to the server (GET HTTP/1.1 Host www.codecademy.com/article/what-is-http Body: /article/what is http) -> server checks to see if the path can be accessed -> if yes, returns (HTTP/1.1 200 OK Content Type: xyz)


*on https* 
secure version of http 


---
URI: Uniform Resource Identifier: string that refers to a resource 
- unique accross the internet in a namespace e.g. ISBN no. 
- URL: directory type 