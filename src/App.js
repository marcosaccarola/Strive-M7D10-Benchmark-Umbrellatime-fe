//import logo from './logo.svg';
import './style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './components/01-Homepage';
import Bar from './components/00-Bar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bar />
        <HomePage />
      </header>
    </div>
  );
}

export default App;
