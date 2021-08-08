function reformatState(tasks) {
  let projects = {};
  for (let each of tasks) {
    if (!projects[each.project_id]) {
      projects[each.project_id] = {
        name: each.project_name,
        tasks: [
          {
            id: each.id,
            name: each.name,
            project_id: each.project_id,
            description: each.description,
            priority: each.priority,
            status: each.status,
            end: each.end,
            avatar: each.avatar,
            start: each.start,
            user_id: each.user_id,
            user_name: each.user_name,
          },
        ],
      };
    } else {
      let task = {
        id: each.id,
        name: each.name,
        project_id: each.project_id,
        description: each.description,
        priority: each.priority,
        status: each.status,
        end: each.end,
        start: each.start,
        avatar: each.avatar,
        user_id: each.user_id,
        user_name: each.user_name,
      };
      projects[each.project_id].tasks.push(task);
    }
  }
  return projects;
}

// --------------------------------------------------------------------------------

function deleteTask(id, tasks) {
  let index;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      index = i;
    }
  }
  tasks.splice(index, 1);
  return tasks;
}

function listForProject(tasks) {
  let listSchema = [
    {
      id: "1",
      name: "In Progress",
      tasks: [],
    },
    {
      id: "2",
      name: "Backlog",
      tasks: [],
    },
    {
      id: "3",
      name: "On Hold",
      tasks: [],
    },
    {
      id: "4",
      name: "Completed",
      tasks: [],
    },
  ];

  for (let list of listSchema) {
    for (let task of tasks) {
      let taskDetails = {};
      if (task.status === list.name) {
        taskDetails["id"] = task.id;
        taskDetails["name"] = task.name;
        taskDetails["priority"] = task.priority;
        taskDetails["status"] = task.status;
        taskDetails["start"] = task.start;
        taskDetails["end"] = task.end;
        taskDetails["user_id"] = task.user_id;
        taskDetails["avatar"] = task.avatar;
        taskDetails["user_name"] = task.user_name;
        taskDetails["description"] = task.description;
        taskDetails["project_id"] = task.project_id;
        list.tasks.push(taskDetails);
      }
    }
  }
  return listSchema;
}

// const getListsForParams = function (projects, params, tasks) {
//   let listSchema = [{
//     id: "1",
//     name: "In Progress",
//     tasks: []
//   },
//   {
//     id: "2",
//     name: "Backlog",
//     tasks: []
//   },
//   {
//     id: "3",
//     name: "On Hold",
//     tasks: []
//   },
//   {
//     id: "4",
//     name: "Completed",
//     tasks: [],
//   }
//   ];

//   // let listTasks = getTasksForParams(projects, params, tasks)

//   for (let list of listSchema) {
//     for (let task of listTasks) {
//       let taskDetails = {};
//       if (task.status === list.name) {
//         taskDetails['id'] = task.id;
//         taskDetails['name'] = task.name;
//         taskDetails['priority'] = task.priority;
//         list.tasks.push(taskDetails);
//       }
//     }
//   }
//   return listSchema
// }

const users = [
  {
    id: 1,
    user_name: "Sylvia Palmer",
    email: "s.palmer@gmail.com",
    password: "123",
    avatar: "https://i.imgur.com/LpaY82x.png",
  },
  {
    id: 2,
    user_name: "Tori Malcolm",
    email: "m.tori@gmail.com",
    password: "123",
    avatar: "https://i.imgur.com/Nmx0Qxo.png",
  },
  {
    id: 3,
    user_name: "Mildred Nazir",
    email: "n.mildred@gmail.com",
    password: "123",
    avatar: "https://i.imgur.com/T2WwVfS.png",
  },
];

const projects = [
  {
    id: 1,
    name: "Make My Day",
    description:
      "final projects: working in a gourp of three and focus on MVD.",
    status: "In Progress",
    start_date: "2021-08-07T20:36:40.513Z",
    due_date: "2021-08-15T17:23:54.000Z",
    modified_date: null,
    end_date: null,
    users: [1, 2, 3],
  },
  {
    id: 2,
    name: "Jungle",
    description:
      "A mini e-commerce application built with Rails 4.2 for purposes of learning Rails.",
    status: "In Progress",
    start_date: "2021-08-07T20:36:40.513Z",
    due_date: "2021-09-15T17:23:54.000Z",
    modified_date: null,
    end_date: null,
    users: [1, 2],
  },
  {
    id: 3,
    name: "Scheduler",
    description: "This scheduler is a singe-page app built with react.",
    status: "In Progress",
    start_date: "2021-08-07T20:36:40.513Z",
    due_date: "2021-08-20T17:23:54.000Z",
    modified_date: null,
    end_date: null,
    users: [1, 3],
  },
  {
    id: 4,
    name: "Tweeter",
    description:
      "Tweeter is a simple, single-page Twitter clone. It is to practice HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.",
    status: "In Progress",
    start_date: "2021-08-07T20:36:40.513Z",
    due_date: "2021-08-15T17:23:54.000Z",
    modified_date: null,
    end_date: null,
    users: [1, 2, 3],
  },
];
const HaveProjectWithUsers = (projects, users) => {
  let projectWithUsers = {};
  for (let project of projects) {
    if (!projectWithUsers[project.id]) {
      projectWithUsers[project.id] = { users: [] };
    }
    for (let projectUser of project.users) {
      for (let user of users) {
        if (projectUser === user.id) {
          projectWithUsers[project.id].users.push(user);
        }
      }
    }
  }

  return projectWithUsers;
};
console.log(HaveProjectWithUsers(projects, users));

module.exports = {
  reformatState,
  listForProject,
  deleteTask,
  HaveProjectWithUsers,
};

// {
// 1: {users: [{user1}, {user2}],
// 2: {users: [{user1}, {user2}]},
// 2: {users: [{user1}, {user2}]},
// [
//   {
//       "data": [
//           {
//               "id": 1,
//               "user_name": "Sylvia Palmer",
//               "email": "s.palmer@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/LpaY82x.png"
//           },
//           {
//               "id": 2,
//               "user_name": "Tori Malcolm",
//               "email": "m.tori@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/Nmx0Qxo.png"
//           },
//           {
//               "id": 3,
//               "user_name": "Mildred Nazir",
//               "email": "n.mildred@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/T2WwVfS.png"
//           },
//           {
//               "id": 4,
//               "user_name": "Sylvia Palmer",
//               "email": "s.palmer@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/LpaY82x.png"
//           },
//           {
//               "id": 5,
//               "user_name": "Tori Malcolm",
//               "email": "m.tori@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/Nmx0Qxo.png"
//           },
//           {
//               "id": 6,
//               "user_name": "Mildred Nazir",
//               "email": "n.mildred@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/T2WwVfS.png"
//           },
//           {
//               "id": 7,
//               "user_name": "Sylvia Palmer",
//               "email": "s.palmer@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/LpaY82x.png"
//           },
//           {
//               "id": 8,
//               "user_name": "Tori Malcolm",
//               "email": "m.tori@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/Nmx0Qxo.png"
//           },
//           {
//               "id": 9,
//               "user_name": "Mildred Nazir",
//               "email": "n.mildred@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/T2WwVfS.png"
//           },
//           {
//               "id": 10,
//               "user_name": "Sylvia Palmer",
//               "email": "s.palmer@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/LpaY82x.png"
//           },
//           {
//               "id": 11,
//               "user_name": "Tori Malcolm",
//               "email": "m.tori@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/Nmx0Qxo.png"
//           },
//           {
//               "id": 12,
//               "user_name": "Mildred Nazir",
//               "email": "n.mildred@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/T2WwVfS.png"
//           },
//           {
//               "id": 13,
//               "user_name": "Sylvia Palmer",
//               "email": "s.palmer@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/LpaY82x.png"
//           },
//           {
//               "id": 14,
//               "user_name": "Tori Malcolm",
//               "email": "m.tori@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/Nmx0Qxo.png"
//           },
//           {
//               "id": 15,
//               "user_name": "Mildred Nazir",
//               "email": "n.mildred@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/T2WwVfS.png"
//           },
//           {
//               "id": 16,
//               "user_name": "Sylvia Palmer",
//               "email": "s.palmer@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/LpaY82x.png"
//           },
//           {
//               "id": 17,
//               "user_name": "Tori Malcolm",
//               "email": "m.tori@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/Nmx0Qxo.png"
//           },
//           {
//               "id": 18,
//               "user_name": "Mildred Nazir",
//               "email": "n.mildred@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/T2WwVfS.png"
//           },
//           {
//               "id": 19,
//               "user_name": "Sylvia Palmer",
//               "email": "s.palmer@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/LpaY82x.png"
//           },
//           {
//               "id": 20,
//               "user_name": "Tori Malcolm",
//               "email": "m.tori@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/Nmx0Qxo.png"
//           },
//           {
//               "id": 21,
//               "user_name": "Mildred Nazir",
//               "email": "n.mildred@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/T2WwVfS.png"
//           },
//           {
//               "id": 22,
//               "user_name": "Sylvia Palmer",
//               "email": "s.palmer@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/LpaY82x.png"
//           },
//           {
//               "id": 23,
//               "user_name": "Tori Malcolm",
//               "email": "m.tori@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/Nmx0Qxo.png"
//           },
//           {
//               "id": 24,
//               "user_name": "Mildred Nazir",
//               "email": "n.mildred@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/T2WwVfS.png"
//           },
//           {
//               "id": 25,
//               "user_name": "Sylvia Palmer",
//               "email": "s.palmer@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/LpaY82x.png"
//           },
//           {
//               "id": 26,
//               "user_name": "Tori Malcolm",
//               "email": "m.tori@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/Nmx0Qxo.png"
//           },
//           {
//               "id": 27,
//               "user_name": "Mildred Nazir",
//               "email": "n.mildred@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/T2WwVfS.png"
//           },
//           {
//               "id": 28,
//               "user_name": "Sylvia Palmer",
//               "email": "s.palmer@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/LpaY82x.png"
//           },
//           {
//               "id": 29,
//               "user_name": "Tori Malcolm",
//               "email": "m.tori@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/Nmx0Qxo.png"
//           },
//           {
//               "id": 30,
//               "user_name": "Mildred Nazir",
//               "email": "n.mildred@gmail.com",
//               "password": "123",
//               "avatar": "https://i.imgur.com/T2WwVfS.png"
//           }
//       ],
//       "status": 200,
//       "statusText": "OK",
//       "headers": {
//           "access-control-allow-origin": "*",
//           "content-encoding": "gzip",
//           "content-type": "application/json; charset=utf-8",
//           "date": "Sat, 07 Aug 2021 23:15:09 GMT",
//           "etag": "W/\"ec6-g/pb7AqdfiJs0C0UYPfty+VI6tc\"",
//           "vary": "Accept-Encoding",
//           "x-powered-by": "Express"
//       },
//       "config": {
//           "url": "/api/users",
//           "method": "get",
//           "headers": {
//               "Accept": "application/json, text/plain, */*"
//           },
//           "transformRequest": [
//               null
//           ],
//           "transformResponse": [
//               null
//           ],
//           "timeout": 0,
//           "xsrfCookieName": "XSRF-TOKEN",
//           "xsrfHeaderName": "X-XSRF-TOKEN",
//           "maxContentLength": -1,
//           "maxBodyLength": -1
//       },
//       "request": {}
//   },
//   {
//       "data": [
//           {
//               "id": 1,
//               "name": "Make My Day",
//               "description": "final projects: working in a gourp of three and focus on MVD.",
//               "status": "In Progress",
//               "start_date": "2021-08-07T20:36:40.513Z",
//               "due_date": "2021-08-15T17:23:54.000Z",
//               "modified_date": null,
//               "end_date": null,
//               "users": [
//                   1,
//                   2,
//                   3
//               ]
//           },
//           {
//               "id": 2,
//               "name": "Jungle",
//               "description": "A mini e-commerce application built with Rails 4.2 for purposes of learning Rails.",
//               "status": "In Progress",
//               "start_date": "2021-08-07T20:36:40.513Z",
//               "due_date": "2021-09-15T17:23:54.000Z",
//               "modified_date": null,
//               "end_date": null,
//               "users": [
//                   1,
//                   2
//               ]
//           },
//           {
//               "id": 3,
//               "name": "Scheduler",
//               "description": "This scheduler is a singe-page app built with react.",
//               "status": "In Progress",
//               "start_date": "2021-08-07T20:36:40.513Z",
//               "due_date": "2021-08-20T17:23:54.000Z",
//               "modified_date": null,
//               "end_date": null,
//               "users": [
//                   1,
//                   3
//               ]
//           },
//           {
//               "id": 4,
//               "name": "Tweeter",
//               "description": "Tweeter is a simple, single-page Twitter clone. It is to practice HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.",
//               "status": "In Progress",
//               "start_date": "2021-08-07T20:36:40.513Z",
//               "due_date": "2021-08-15T17:23:54.000Z",
//               "modified_date": null,
//               "end_date": null,
//               "users": [
//                   1,
//                   2,
//                   3
//               ]
//           }
//       ],
//       "status": 200,
//       "statusText": "OK",
//       "headers": {
//           "access-control-allow-origin": "*",
//           "content-encoding": "gzip",
//           "content-type": "application/json; charset=utf-8",
//           "date": "Sat, 07 Aug 2021 23:15:09 GMT",
//           "etag": "W/\"474-/FmSnQskfQA9Ocx5tq0maz2YxB8\"",
//           "vary": "Accept-Encoding",
//           "x-powered-by": "Express"
//       },
//       "config": {
//           "url": "/api/projects",
//           "method": "get",
//           "headers": {
//               "Accept": "application/json, text/plain, */*"
//           },
//           "transformRequest": [
//               null
//           ],
//           "transformResponse": [
//               null
//           ],
//           "timeout": 0,
//           "xsrfCookieName": "XSRF-TOKEN",
//           "xsrfHeaderName": "X-XSRF-TOKEN",
//           "maxContentLength": -1,
//           "maxBodyLength": -1
//       },
//       "request": {}
//   },
//   {
//       "data": [
//           {
//               "project_name": "Make My Day",
//               "user_name": "Sylvia Palmer",
//               "avatar": "https://i.imgur.com/LpaY82x.png",
//               "id": 8,
//               "project_id": 1,
//               "user_id": 1,
//               "name": "make template for pages",
//               "description": null,
//               "priority": "1",
//               "status": "In Progress",
//               "end": "2021-08-15T07:00:00.000Z",
//               "start": "2021-08-05T07:00:00.000Z"
//           },
//           {
//               "project_name": "Jungle",
//               "user_name": "Tori Malcolm",
//               "avatar": "https://i.imgur.com/Nmx0Qxo.png",
//               "id": 9,
//               "project_id": 2,
//               "user_id": 2,
//               "name": "create components",
//               "description": null,
//               "priority": "2",
//               "status": "Backlog",
//               "end": "2021-08-03T07:00:00.000Z",
//               "start": "2021-08-01T07:00:00.000Z"
//           },
//           {
//               "project_name": "Scheduler",
//               "user_name": "Mildred Nazir",
//               "avatar": "https://i.imgur.com/T2WwVfS.png",
//               "id": 10,
//               "project_id": 3,
//               "user_id": 3,
//               "name": "create routes for front end",
//               "description": null,
//               "priority": "3",
//               "status": "On Hold",
//               "end": "2021-08-25T07:00:00.000Z",
//               "start": "2021-08-15T07:00:00.000Z"
//           },
//           {
//               "project_name": "Make My Day",
//               "user_name": "Sylvia Palmer",
//               "avatar": "https://i.imgur.com/LpaY82x.png",
//               "id": 11,
//               "project_id": 1,
//               "user_id": 1,
//               "name": "create routes for back end",
//               "description": null,
//               "priority": "1",
//               "status": "Completed",
//               "end": "2021-08-08T07:00:00.000Z",
//               "start": "2021-08-04T07:00:00.000Z"
//           },
//           {
//               "project_name": "Jungle",
//               "user_name": "Tori Malcolm",
//               "avatar": "https://i.imgur.com/Nmx0Qxo.png",
//               "id": 12,
//               "project_id": 2,
//               "user_id": 2,
//               "name": "search for articles api",
//               "description": null,
//               "priority": "2",
//               "status": "In Progress",
//               "end": "2021-08-10T07:00:00.000Z",
//               "start": "2021-08-02T07:00:00.000Z"
//           },
//           {
//               "project_name": "Scheduler",
//               "user_name": "Mildred Nazir",
//               "avatar": "https://i.imgur.com/T2WwVfS.png",
//               "id": 13,
//               "project_id": 3,
//               "user_id": 3,
//               "name": "connect websocket",
//               "description": null,
//               "priority": "3",
//               "status": "Backlog",
//               "end": "2021-08-30T07:00:00.000Z",
//               "start": "2021-08-25T07:00:00.000Z"
//           },
//           {
//               "project_name": "Make My Day",
//               "user_name": "Tori Malcolm",
//               "avatar": "https://i.imgur.com/Nmx0Qxo.png",
//               "id": 15,
//               "project_id": 1,
//               "user_id": 2,
//               "name": "make template for pages",
//               "description": null,
//               "priority": "1",
//               "status": "In Progress",
//               "end": "2021-08-15T07:00:00.000Z",
//               "start": "2021-08-05T07:00:00.000Z"
//           },
//           {
//               "project_name": "Jungle",
//               "user_name": "Mildred Nazir",
//               "avatar": "https://i.imgur.com/T2WwVfS.png",
//               "id": 16,
//               "project_id": 2,
//               "user_id": 3,
//               "name": "create components",
//               "description": null,
//               "priority": "2",
//               "status": "Backlog",
//               "end": "2021-08-03T07:00:00.000Z",
//               "start": "2021-08-01T07:00:00.000Z"
//           },
//           {
//               "project_name": "Scheduler",
//               "user_name": "Sylvia Palmer",
//               "avatar": "https://i.imgur.com/LpaY82x.png",
//               "id": 17,
//               "project_id": 3,
//               "user_id": 1,
//               "name": "create routes for front end",
//               "description": null,
//               "priority": "3",
//               "status": "On Hold",
//               "end": "2021-08-25T07:00:00.000Z",
//               "start": "2021-08-15T07:00:00.000Z"
//           },
//           {
//               "project_name": "Make My Day",
//               "user_name": "Tori Malcolm",
//               "avatar": "https://i.imgur.com/Nmx0Qxo.png",
//               "id": 18,
//               "project_id": 1,
//               "user_id": 2,
//               "name": "create routes for back end",
//               "description": null,
//               "priority": "1",
//               "status": "Completed",
//               "end": "2021-08-08T07:00:00.000Z",
//               "start": "2021-08-04T07:00:00.000Z"
//           },
//           {
//               "project_name": "Jungle",
//               "user_name": "Mildred Nazir",
//               "avatar": "https://i.imgur.com/T2WwVfS.png",
//               "id": 19,
//               "project_id": 2,
//               "user_id": 3,
//               "name": "search for articles api",
//               "description": null,
//               "priority": "2",
//               "status": "In Progress",
//               "end": "2021-08-10T07:00:00.000Z",
//               "start": "2021-08-02T07:00:00.000Z"
//           },
//           {
//               "project_name": "Scheduler",
//               "user_name": "Sylvia Palmer",
//               "avatar": "https://i.imgur.com/LpaY82x.png",
//               "id": 20,
//               "project_id": 3,
//               "user_id": 1,
//               "name": "connect websocket",
//               "description": null,
//               "priority": "3",
//               "status": "Backlog",
//               "end": "2021-08-30T07:00:00.000Z",
//               "start": "2021-08-25T07:00:00.000Z"
//           },
//           {
//               "project_name": "Scheduler",
//               "user_name": "Mildred Nazir",
//               "avatar": "https://i.imgur.com/T2WwVfS.png",
//               "id": 22,
//               "project_id": 3,
//               "user_id": 3,
//               "name": "create routes for front end",
//               "description": null,
//               "priority": "3",
//               "status": "On Hold",
//               "end": "2021-08-25T07:00:00.000Z",
//               "start": "2021-08-15T07:00:00.000Z"
//           },
//           {
//               "project_name": "Make My Day",
//               "user_name": "Sylvia Palmer",
//               "avatar": "https://i.imgur.com/LpaY82x.png",
//               "id": 23,
//               "project_id": 1,
//               "user_id": 1,
//               "name": "create routes for back end",
//               "description": null,
//               "priority": "1",
//               "status": "Completed",
//               "end": "2021-08-08T07:00:00.000Z",
//               "start": "2021-08-04T07:00:00.000Z"
//           },
//           {
//               "project_name": "Jungle",
//               "user_name": "Tori Malcolm",
//               "avatar": "https://i.imgur.com/Nmx0Qxo.png",
//               "id": 24,
//               "project_id": 2,
//               "user_id": 2,
//               "name": "search for articles api",
//               "description": null,
//               "priority": "2",
//               "status": "In Progress",
//               "end": "2021-08-10T07:00:00.000Z",
//               "start": "2021-08-02T07:00:00.000Z"
//           },
//           {
//               "project_name": "Scheduler",
//               "user_name": "Mildred Nazir",
//               "avatar": "https://i.imgur.com/T2WwVfS.png",
//               "id": 25,
//               "project_id": 3,
//               "user_id": 3,
//               "name": "connect websocket",
//               "description": null,
//               "priority": "3",
//               "status": "Backlog",
//               "end": "2021-08-30T07:00:00.000Z",
//               "start": "2021-08-25T07:00:00.000Z"
//           },
//           {
//               "project_name": "Scheduler",
//               "user_name": "Tori Malcolm",
//               "avatar": "https://i.imgur.com/Nmx0Qxo.png",
//               "id": 27,
//               "project_id": 3,
//               "user_id": 2,
//               "name": "connect websocket",
//               "description": null,
//               "priority": "3",
//               "status": "Backlog",
//               "end": "2021-08-30T07:00:00.000Z",
//               "start": "2021-08-25T07:00:00.000Z"
//           },
//           {
//               "project_name": "Tweeter",
//               "user_name": "Sylvia Palmer",
//               "avatar": "https://i.imgur.com/LpaY82x.png",
//               "id": 26,
//               "project_id": 4,
//               "user_id": 1,
//               "name": "create chat feature",
//               "description": "sdffgadfgadfgadsfsdfasdfsdfasdfasdfas",
//               "priority": "2",
//               "status": "Completed",
//               "end": "2021-08-28T07:00:00.000Z",
//               "start": "2021-08-11T07:00:00.000Z"
//           },
//           {
//               "project_name": "Tweeter",
//               "user_name": "Mildred Nazir",
//               "avatar": "https://i.imgur.com/T2WwVfS.png",
//               "id": 28,
//               "project_id": 4,
//               "user_id": 3,
//               "name": "create chat featureadsfsdfasdfasdf",
//               "description": "xdgfsgsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf",
//               "priority": "1",
//               "status": "On Hold",
//               "end": "2021-08-19T07:00:00.000Z",
//               "start": "2021-08-04T07:00:00.000Z"
//           }
//       ],
//       "status": 200,
//       "statusText": "OK",
//       "headers": {
//           "access-control-allow-origin": "*",
//           "connection": "close",
//           "content-encoding": "gzip",
//           "content-type": "application/json; charset=utf-8",
//           "date": "Sat, 07 Aug 2021 23:15:09 GMT",
//           "etag": "W/\"15bc-VwzmnaNIl27IxR8BfnZAk+XuboA\"",
//           "transfer-encoding": "chunked",
//           "vary": "Accept-Encoding",
//           "x-powered-by": "Express"
//       },
//       "config": {
//           "url": "/api/tasks",
//           "method": "get",
//           "headers": {
//               "Accept": "application/json, text/plain, */*"
//           },
//           "transformRequest": [
//               null
//           ],
//           "transformResponse": [
//               null
//           ],
//           "timeout": 0,
//           "xsrfCookieName": "XSRF-TOKEN",
//           "xsrfHeaderName": "X-XSRF-TOKEN",
//           "maxContentLength": -1,
//           "maxBodyLength": -1
//       },
//       "request": {}
//   }
// ]
