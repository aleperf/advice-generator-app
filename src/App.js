import './App.scss';
import {useEffect, useState} from 'react';
import getSentence from './api/api';
import SentenceCard from './components/SentenceCard';


function App() {
  
  const [advice, setAdvice] = useState({advice: "default sentence", id: "0"});
  
  const getNewSentence = async () =>{
    const {advice, id} =  await getSentence();
    setAdvice({advice, id})
  }

  useEffect(()=>{
    getNewSentence();
  },[])


  return (
    <div>
      <SentenceCard advice={advice} onClickButton={getNewSentence}/>
      <footer className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
    Frontend Mentor </a>. 
    Coded by <a href="https://github.com/aleperf">@aleperf</a>.
  </footer>
    </div>
  );
}

export default App;
