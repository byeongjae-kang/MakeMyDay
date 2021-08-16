# Make My Day

### [Try the Live Demo!](https://makemydaydemo.netlify.app/)

## About

TLDR: A trello clone / task board built with React Hooks.

Make My Day is a project management app that allows small teams to track tasks and communicate with other team members. Features of this app include:

Project View:

- Users can create new projects and filter project by username.
- Users can chat with other team members within the same project.

Task View:

- Users can create new tasks. New tasks are automatically created in the In-Progress section.
- Users can drag and drop tasks to one of four sections: In-Progress, Backlog, On-Hold or Completed.
- Tasks can be assigned to team members and filtered by username.
- Tasks within each section are automatically sorted by priority (low, medium, high). Tasks with equal priority are sorted by due date.
- Gantt chart displays a visual of all tasks. Users can change start and end dates by dragging bars left or right.

We made this app as part our final group project at Lighthouse Labs.

## Preview

!["MMD Task View"](https://github.com/byeongjae-kang/MakeMyDay/blob/master/front-end/src/images/kanban.png)

!["MMD Demo"](https://github.com/byeongjae-kang/MakeMyDay/blob/master/docs/demo.gif)

## Contributors

- [Byeongjae Kang](https://github.com/byeongjae-kang)
- [Korlan Kassembayeva](https://github.com/Okenai)
- [Bernard Yang](https://github.com/WebDevBernard)

## Tech Stack

- Built using React, Node, Express, PostgreSQL
- [React Beautiful DND](https://github.com/atlassian/react-beautiful-dnd) for drag and drop and [React Natural Drag Animation](https://github.com/rokborf/natural-drag-animation-rbdnd) for drag and drop animation
- [React Gantt Timeline](https://github.com/guiqui/react-timeline-gantt) for gantt chart
- Material UI for styling

## Installation

### Setup PostgreSQL:

`cd back-end/db`<br />
`psql -U postgres` or psql -U "yourusername" and enter your password<br />
`CREATE DATABASE make_my_day;`<br />
`\c make_my_day;`<br />
`\i schema/users.sql;`<br />
`\i schema/projects.sql;`<br />
`\i schema/tasks.sql;`<br />
`\i schema/messages.sql;`<br />
`\i seeds/seeds.sql;`

### Back-End Folder (localhost:8080):

Create a .env file by copying the .env example `cp env.example .env`. In the .env file you made, copy your PostgreSQL username to `PGUSER=` and password to `PGPASSWORD=` 
<br />
<br />
`cd back-end`<br />
`npm install`<br />
`npm run nodemon`<br />

### Front-End Folder (localhost:3000):

`cd front-end`<br />
`npm install`<br />
`npm start`<br />

### Optional:

\*To enable login: On Layout.js (front-end folder), all you need to do is change line 96 from `user` to `!user`. Login is now enabled. You can login using usernames from this [list of available usernames](https://github.com/byeongjae-kang/MakeMyDay/blob/master/back-end/db/seeds/seeds.sql). How to enable Google login
: start by creating an OAUTH2 Client ID on [Google Cloud Platform](https://console.cloud.google.com/). In the front-end folder, create a .env.local file by copying "env.local example": `cp env.local example .env.local` and then paste your Google OAUTH2 ID after `REACT_APP_GOOGLE_CLIENT_ID=` in the .env.local file that you made.

\*To enable chat: **Enable Login First**. On Messages.js (front-end folder), comment line 70 ` });` uncomment line 71 `}, [user.id, project.id, project.users]);` and uncomment line 173 `<form onSubmit={(e) => submitHandler(e, user, project, inputMessage)}>` On MessageContext.js (front-end folder) comment line 4 `const socket = io("");` uncomment line 5 `const socket = io("ws://localhost:8900");`. Change to socket directory `cd socket` and run the following commands: `npm install` and `npm run nodemon`. Open another brower window using incognito and log in as a different user.  Chat only works locally.

## Dependencies

- Node v14.17.3 or higher
