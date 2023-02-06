import { Route, Routes, useNavigate } from "react-router-dom";

const Contents = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/projects" element={<div>Home</div>} />
      <Route path="/tasks" element={<div>Tasks</div>} />
      <Route path="/planning" element={<div>Planning</div>} />
      <Route path="/backlog" element={<div>Backlog</div>} />
    </Routes>
  );
};

export default Contents;
