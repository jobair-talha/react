import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My First React Project</h1>
        <Person></Person>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </header>
    </div>
  );
}
function Person() {
  return <h1>Name: TALHA</h1>
}


function Card() {
  const style = {
    border: "1px solid yellow",
    background: "#AEB6BF",
    margin: "10px"
  }
  return (
    <div style={style}>
      <h3>Interview Questions</h3>
      <p>If you want to upgrade the person shouting at you in every evening at 5.00pm, you have to be competent and pretty sharp with latest technology. The world is competitive. but dont worry, that js dude will compile the questions for you. this will make your life easier to win the next big thing.</p>
    </div>
  )
}
export default App;
