import { useEffect, useState } from "react";
import ProjectDropdownMenu from "../TasksPage/TaskPageComponents/ProjectDropdownMenu";
import TasksList from "../TasksPage/TaskPageComponents/TasksList";
import CompletedTaskList from "../TasksPage/TaskPageComponents/CompletedTaskList";
import AddTaskModal from "../TasksPage/TaskPageComponents/AddTaskModal";

const ProjectsPage = ({ projects, getTasks, tasks, tasksCollectionRef }) => {
  const [selectedProject, setSelectedProject] = useState({});
  const [projectTaskList, setProjectTaskList] = useState([]);
  const [completedList, setCompletedList] = useState({});
  const [toDoList, setDoList] = useState({});

  useEffect(() => {
    filterTasks();
  }, [tasks, selectedProject]);

  const onClick = ({ key }) => {
    const SelectedProject = projects.filter((project) => {
      if (project.id === key) {
        setSelectedProject(project);
      }
    });
    filterTasks();
  };

  function filterTasks() {
    const projectTasks = tasks.filter((task) => {
      if (task.project_Id === selectedProject.id) {
        return task;
      }
    });
    setProjectTaskList(projectTasks);
    sortTasks(projectTasks);
  }
  function sortTasks(tasklist) {
    const toDoTasks = tasklist.filter((task) => {
      return task.complete === false;
    });
    setDoList(toDoTasks);

    const completedTasks = tasklist.filter((task) => {
      return task.complete === true;
    });
    setCompletedList(completedTasks);
  }

  const items = projects.map((project, index) => {
    return { label: project.name, key: project.id };
  });

  console.log(selectedProject, toDoList, completedList);
  return (
    <div>
      <AddTaskModal
        tasksCollectionRef={tasksCollectionRef}
        getTasks={getTasks}
        selectedProject={selectedProject}
      />{" "}
      <ProjectDropdownMenu items={items} onClick={onClick} />
      <div className="taskListContainer">
        <div className="list">
          <TasksList tasks={tasks} getTasks={getTasks} toDoList={toDoList} />
        </div>
        <div className="list">
          <CompletedTaskList
            tasks={tasks}
            getTasks={getTasks}
            completedList={completedList}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
