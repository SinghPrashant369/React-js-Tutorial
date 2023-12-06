ReactDOM.render(
  <h1>Hello, this is my first react app.</h1>,
  document.getElementById("root")
);

/*Try to write that 1-linear of React code again! this 
time, see if you can figure out how to render and <ul> 
with 2+ <li>s inside */
ReactDOM.render(
  <ul>
    <li>Prashant</li>
    <li>Rohan</li>
  </ul>,
  document.getElementsByClassName("container")
);
