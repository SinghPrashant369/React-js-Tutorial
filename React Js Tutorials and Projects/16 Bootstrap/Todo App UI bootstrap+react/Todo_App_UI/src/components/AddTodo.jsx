function AddTodo() {
  return (
    <div class="container row-container">
      <div class="row">
        <div class="col-4">
          <input type="text" placeholder="Enter to do here" />
        </div>
        <div class="col-3">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success btn-size">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
