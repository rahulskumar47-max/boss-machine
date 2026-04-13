Boss Machine API

A RESTful API built with Express.js to manage a fictional villain organization.
This project handles minions, ideas, and meetings for an evil boss dashboard.

🚀 Features
Manage minions (create, update, delete, view)
Track million-dollar ideas 💡
Automatically generate meetings 📅
Custom middleware to validate idea value
Fully tested API endpoints
🛠️ Tech Stack
Node.js
Express.js
body-parser
cors
📁 Project Structure
project-root/
│
├── server/
│   ├── api.js
│   ├── db.js
│   ├── minions.js
│   ├── ideas.js
│   ├── meetings.js
│   └── checkMillionDollarIdea.js
│
├── app.js
├── main.js
└── package.json

API Endpoints
🧑‍💼 Minions
GET /api/minions → Get all minions
GET /api/minions/:id → Get one minion
POST /api/minions → Create minion
PUT /api/minions/:id → Update minion
DELETE /api/minions/:id → Delete minion
💡 Ideas
GET /api/ideas → Get all ideas
GET /api/ideas/:id → Get one idea
POST /api/ideas → Create idea (must be ≥ $1M)
PUT /api/ideas/:id → Update idea
DELETE /api/ideas/:id → Delete idea
📅 Meetings
GET /api/meetings → Get all meetings
POST /api/meetings → Create meeting
DELETE /api/meetings → Delete all meetings
💰 Custom Middleware
checkMillionDollarIdea

Ensures every idea generates at least $1,000,000:

numWeeks × weeklyRevenue ≥ 1,000,000

If not, the request is rejected with status 400.
