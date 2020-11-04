import logo from './logo.svg';
import './App.css';
import GrandP from './Grandparent'
import MessageContext from './Context';


function App() {
  return (
    <MessageContext.Provider value={'Coming frm Provider in App'}>
    <div>
      <GrandP />
    </div>
    </MessageContext.Provider>
  );
}

export default App;
