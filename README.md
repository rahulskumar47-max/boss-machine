Boss Machine API

A RESTful API built with Express.js that simulates a fictional villain organization dashboard. It manages minions, evil ideas, and scheduled meetings for an imaginary “boss system.”

Features
Full CRUD operations for managing minions
Create, view, update, and delete “million-dollar” ideas
Automatic meeting scheduling system
Custom middleware to validate high-value ideas
Fully tested API endpoints for reliability
Tech Stack
Node.js
Express.js
body-parser
cors
Project Structure

project-root/

server/

api.js
db.js
minions.js
ideas.js
meetings.js
checkMillionDollarIdea.js

app.js
main.js
package.json

API Endpoints
Minions
GET /api/minions → Retrieve all minions
GET /api/minions/:id → Retrieve a single minion
POST /api/minions → Create a new minion
PUT /api/minions/:id → Update an existing minion
DELETE /api/minions/:id → Remove a minion
Ideas
GET /api/ideas → Retrieve all ideas
GET /api/ideas/:id → Retrieve a single idea
POST /api/ideas → Create a new idea (must be at least $1M in value)
PUT /api/ideas/:id → Update an idea
DELETE /api/ideas/:id → Delete an idea
Meetings
GET /api/meetings → Retrieve all meetings
POST /api/meetings → Create a new meeting
DELETE /api/meetings → Delete all meetings
Custom Middleware
checkMillionDollarIdea

This middleware ensures that only high-value ideas are accepted.

An idea is valid only if:

numWeeks × weeklyRevenue ≥ 1,000,000

If the condition is not met, the request is rejected with a 400 status code.
