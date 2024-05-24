import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import Quiz from './Quiz';

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Quiz />
      </header>
    </div>
  );
}

export default App;