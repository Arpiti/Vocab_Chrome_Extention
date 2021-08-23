import './App.css';
import { VOCAB } from './vocab';

function App() {

  let random = Math.floor(Math.random() * VOCAB.length);

  return (
    <div className="App">
      <header className="App-container">
        <div className="App-Logo">
          <img src="https://blaze.today/images/basic_logo.png" alt="logo" />
          <h1>TextBlaze</h1>
          <p> Now, every time you open a new tab on Google Chrome, you learn a <span style={{ color: 'white' }}>new word</span>, to change the world, just refresh the tab</p>
          <br/>
          <div className="App-ButtonContainer">
            <button type="button" onClick={()=>window.location.href="https://blaze.today"}>Learn Snippet Hacks</button>
          </div>
        </div>
        <div className="App-WordMeaning">

          <img className="App-anime" src="https://blaze.today/images/anim_main.webp" alt="anime" />
          <h4>Word</h4>
          <p> {VOCAB[random].FIELD1}</p>
          <h4>Meaning</h4>
          <p>{VOCAB[random].FIELD2}</p>
        </div>


      </header>

    </div>
  );
}

export default App;
