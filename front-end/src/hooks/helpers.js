
const tasksForUser = function(tasks, id) {
  let userTasks = [];

  for (let task of tasks) {
    if (task.user_id===id) {
      userTasks.push(task)
    } 
  }
  
 return userTasks;
}



module.exports = {
  tasksForUser,
};
