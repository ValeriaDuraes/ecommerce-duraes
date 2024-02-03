import './App.css';
import Header from './component/Header/index';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from './component/Navbar';

function App() {
  const notify = () => toast('Here is your toast.');

  return (
    <div className="App-header">
        <Header />
        <Navbar />
        <button onClick={notify}>Make me a toast</button>
        <Toaster />
    </div>
  );
}

export default App;
