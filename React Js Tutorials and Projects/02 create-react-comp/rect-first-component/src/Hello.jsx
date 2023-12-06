function Hello() {
  let name = "Prashant";
  let greet = "good morning";
  let country = () => {
    return greet + ", Welcome to Nepal";
  };
  return (
    <h2>
      Hello {name} {country()}
    </h2>
  );
}
export default Hello;
