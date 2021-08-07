function reformatState(tasks) {
  let projects = {}
  for (let each of tasks) {
    if (!projects[each.project_id]){
      projects[each.project_id] = {name: each.project_name,
      tasks: [{id: each.id, 
        name: each.name,
        description: each.description,
        priority: each.priority,
        status: each.status,
        end: each.end,
        start: each.start,
        user_id: each.user_id,
        user_name: each.user_name
      }]}
    } else{
      let task = {
        id: each.id, 
        name: each.name,
        description: each.description,
        priority: each.priority,
        status: each.status,
        end: each.end,
        start: each.start,
        user_id: each.user_id,
        user_name: each.user_name
      }
      projects[each.project_id].tasks.push(task)
    }
  }
  return projects;
};


function deleteTask(id, tasks) {
  let index;
  for (let i=0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
     index = i;
    }
  }
  tasks.splice(index,1)
  return tasks
}

function listForProject(tasks) {
  let listSchema = [{
    id: "1",
    name: "In Progress",
    tasks: []
  },
  {
    id: "2",
    name: "Backlog",
    tasks: []
  },
  {
    id: "3",
    name: "On Hold",
    tasks: []
  },
  {
    id: "4",
    name: "Completed",
    tasks: [],
  }
  ]

  for (let list of listSchema) {
    for (let task of tasks) {
      let taskDetails = {};
      if (task.status === list.name) {
        taskDetails['id'] = task.id;
        taskDetails['name'] = task.name;
        taskDetails['priority'] = task.priority;
        taskDetails['status'] = task.status;
        taskDetails['start'] = task.start;
        taskDetails['end'] = task.end;
        taskDetails['user_id'] = task.user_id;
        taskDetails['avatar'] = task.avatar;
        taskDetails['user_name'] = task.user_name;

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

module.exports = {reformatState, listForProject, deleteTask}