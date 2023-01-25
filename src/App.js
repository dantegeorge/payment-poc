import './App.css';



const handlePayment = () => {
  window.open("https://buy.depay.com/4uAQDSZ0cn6Bx7eb5qaxf");
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={() => handlePayment()}>Pay through DePay</button>
      </header>
    </div>
  );
}

export default App;
