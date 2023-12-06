function TodoItem1() {
  let todoName = "Eat Meat";
  let todoDate = "4/10/2023";
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
export default TodoItem1;
