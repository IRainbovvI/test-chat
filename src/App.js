import './App.css';
import ChatBar from './components/ChatBar';
import InputBar from './components/InputBar';

function App() {
  return (
    <article className='wrapper'>
      <div className='main-container'>
        <ChatBar></ChatBar>
        <InputBar></InputBar>
      </div>
    </article>
  );
}

export default App;
