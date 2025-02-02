export function randomizePlan(minTime, maxTime, projects, tasks) {
    const randomTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    const randomProject = projects[Math.floor(Math.random() * projects.length)];
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
  
    return {
      time: randomTime,
      project: randomProject,
      task: randomTask,
    };
  }
  