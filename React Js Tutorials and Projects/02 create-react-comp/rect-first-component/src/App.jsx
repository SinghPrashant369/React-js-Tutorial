/*Create a component by defining the function or class. In this case function App acts as a component.*/

import KgButton from "./kgButton";
import Hello from "./Hello";
import Random from "./Random";

function App() {
  let name = "Prashant";
  let country = "Nepal";
  return (
    <div>
      <h1>This is first paragraph.</h1>
      <button>Clic me 1</button>
      <KgButton></KgButton>
      <Hello></Hello>
      {/*this is comment: 
      random number and i want Random 5 times. */}
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
    </div>
  );
}

/*eport the component. When the other file want to import this component then he/she can use this name "App" */
export default App;
