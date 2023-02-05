export const VisibilityControl = ({
  isChecked,
  setShowCompleted,
  cleanTasks,
}) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want yo delete")) {
      cleanTasks();
    }
  };
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check fo`rm-switch">
         <input
        className="form-check-input"
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />
     </div>

      <label> Mostrar Tareas Hechas</label>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">Clear</button>
    </div>
  );
};
