const addTaskApi = async (task) => {
  const response = await fetch("http://localhost:3500/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  return response.json();
};

const deleteTaskApi = async (url) => {
  const response = await fetch(url, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

const getTasksApi = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const updateTaskApi = async (task) => {
  const response = await fetch(`http://localhost:3500/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json();
};

export { addTaskApi, deleteTaskApi, getTasksApi, updateTaskApi };
