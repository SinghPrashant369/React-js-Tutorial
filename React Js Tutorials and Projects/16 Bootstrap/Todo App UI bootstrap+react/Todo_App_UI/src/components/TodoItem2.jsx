function TodoItem2() {
  let todoName = "Go to Temple";
  let todoDate = "09/10/2023";
  return (
    <div class="container row-container">
      <div class="row">
        <div class="col-4">
          <h5>{todoName}</h5>
        </div>
        <div class="col-3">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger btn-size">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
