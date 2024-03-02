import "./App.css";

function App() {
  let x = 20;
  let y = 30;
  let marks = 40;
  let grade = [90, 20, 40, 70, 30, 80];

  return (
    <>
      <div>
        <h1>x = {x}</h1>
        <h1>y = {y}</h1>
        {marks >= 50 ? <h1>Result: Pass</h1> : <h1>Result: Fail</h1>}
        <ul>
          {grade.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h1>Sum the x and y = {x + y}</h1>
      </div>
    </>
  );
}

export default App;
