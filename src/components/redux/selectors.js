import { createSelector } from "reselect";

const getTasks = (state) => state.tasks;
const getFilters = (state) => state.filters;
const selectTaskById = createSelector([getTasks(), taskId], (tasks, taskId) =>
  tasks.find((task) => task.id === taskId)
);

const selectTasksByFilters = createSelector(
  [getTasks(), getFilters()],
  (tasks, filters) => {
    const { status, priority, owner } = filters;
    let filteredTasks = tasks;
    if (status !== "Status") {
      filteredTasks = filteredTasks.filter((task) => task.status === status);
    }
    if (priority !== "Priority") {
      filteredTasks = filteredTasks.filter(
        (task) => task.priority === priority
      );
    }

    if (owner !== "Associated") {
      filteredTasks = filteredTasks.filter((task) => task.owner === owner);
    }
    return filteredTasks;
  }
);

export { selectTaskById, selectTasks, selectTasksByFilters };
