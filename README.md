# Make My Day

## Summary

TLDR: A trello clone with a task and project view.

Make My Day is a project management app that allows small teams to track tasks and communicate with other team members. Features of this app include:

Project View:

- Users can create new projects and filter users by project.
- Users can chat with other users in the same project.

Task View:

- Users can create new tasks, new tasks are automatically created in the in-progress section.
- Users can drag and drop tasks to either the in-progress, backlog, on-hold or completed sections.
- Tasks can be assigned to team members and filtered by user.
- Tasks within each section are sorted by priority (low, med, high). Tasks with equal priority are sorted by due date.
- Gantt chart displays a visual of all tasks. Users can change dates by dragging bars left or right.

We made this app as part our final group project at Lighthouse Labs.

## Gif

!["MMD Demo"](https://github.com/byeongjae-kang/MakeMyDay/blob/master/docs/demo.gif)

# Contributors

- [Byeongjae Kang](https://github.com/byeongjae-kang)
- [Korlan Kassembayeva](https://github.com/Okenai)
- [Bernard Yang](https://github.com/WebDevBernard)

## Tech Stack

- Built with React, Node, Express, PostgreSQL
- [React Beautiful DND](https://github.com/atlassian/react-beautiful-dnd) for drag and drop and [React Natural Drag animation](https://github.com/rokborf/natural-drag-animation-rbdnd) for drag and drop animation
- [React Gantt Timeline](https://github.com/guiqui/react-timeline-gantt) for gantt chart
- Material UI for styling

## Installation

### front-end folder\*

`npm install`

### back-end folder

`cp env.example env`
`npm install`

### socket folder\*

`npm install`
`npm run nodemon`

\*Login is not enabled. To enable users: On Layout.js, change line 96 from `user` to `!user`. To enable Google login, create an OAUTH2 Client ID from Google Cloud Platform. In the front-end folder, copy file env.local example: `cp env.local example env.local` and then paste your ID after `REACT_APP_GOOGLE_CLIENT_ID=` in the env.local file that you made.

\*Chat is also not enabled. To enable chat: **First enable users**. On Messages.js, comment line 70 ` });` uncomment line 71 `}, [user.id, project.id, project.users]);` and finally uncomment line 173 `<form onSubmit={(e) => submitHandler(e, user, project, inputMessage)}>` Chat only works locally. Open another brower window using incognito and log in as a different user. These are the avaliable [usernames](https://github.com/byeongjae-kang/MakeMyDay/blob/master/back-end/db/seeds/seeds.sql).
