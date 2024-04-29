import { useState } from 'react';

import ProjectSideBar from './components/ProjectSideBar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import SelectedProject from './components/SelectedProject';

export default function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const [select, setSelect] = useState({
    state: false,
    project: {},
  });

  function handleSelectedProject(id) {
    let project = projectState.projects.filter((iteam) => iteam.id == id);
    setSelect((prev) => {
      return {
        state: true,
        project: { ...project[0] },
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((priv) => {
      return {
        ...priv,
        selectedProjectId: null,
      };
    });
    setSelect((prev) => {
      return {
        ...prev,
        state: false,
      };
    });
  }

  function handleAddProjetc(projectData) {
    setProjectState((prev) => {
      let newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prev,
        projects: [...prev.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  }

  function handleCancel() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProjetc} onCanlel={handleCancel} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen flex gap-8">
      <ProjectSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectedProject}
      />
      {select.state ? <SelectedProject project={select.project} /> : content}
    </main>
  );
}
