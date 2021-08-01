const lists = [
  {
    id: "1",
    name: "In Progress",
    tasks: []
  },
  {
    id: "2",
    name: "On Hold",
    tasks: []
  },
  {
    id: "3",
    name: "Completed",
    tasks: []
  }
]

const tasks = [
  {
    id: "1",
    name: "Task 1",
    status: "In Progress"
  },
  {
    id: "2",
    name: "Task 2",
    status: "Completed"
  },
  {
    id: "3",
    name: "Task 3",
    status: "In Progress"
  },
  {
    id: "4",
    name: "Task 4",
    status: "In Progress"
  },
  {
    id: "5",
    name: "Task 5",
    status: "On Hold"
  },
]

function tasksFilter(tasks, listTitle) {
  let tasksForList = [];
  for (let task of tasks) {
    let taskDetails = {};
    if (task.status === listTitle) {
      taskDetails["id"] = task.id;
      taskDetails["name"] = task.name;
      tasksForList.push(taskDetails);
    }
  }
   return tasksForList
}


function updateLists(lists) {
  for(let list of lists){
    list.tasks = [...tasksFilter(tasks, list.name)]
  }
  return lists
}  


module.exports = { lists, tasks, updateLists };

