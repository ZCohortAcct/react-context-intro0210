import logo from './logo.svg';
import './App.css';
import GrandP from './Grandparent'
import MessageContext from './Context';


function App() {
  return (
    <MessageContext.Provider value={"DON'T SHARE THIS SECRET... But I luv React! =D #Hugz"}>
    <div>
      <GrandP />
    </div>
    </MessageContext.Provider>
  );
}

export default App;
