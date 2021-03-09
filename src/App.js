import './App.css';
import CurrencyRow from './CurrencyRow'

function App() {
  return (
    <>
      <h1>Converter</h1>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </>
  );
}

export default App;
