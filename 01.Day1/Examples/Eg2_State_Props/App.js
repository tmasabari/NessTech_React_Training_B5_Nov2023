import logo from './logo.svg';
import './App.css';
import Emps from './Emps';

function App() {

  return (
    <div>
      <h3>State Management in Class Components</h3>
      <hr />
      <Emps  deptno="10" />
      <hr/>
      <Emps  deptno="20" />
      <hr/>
      <Emps  />
      <hr/>

    </div>
  );

}

export default App;
