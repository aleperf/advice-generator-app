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
      <SentenceCard advice={advice} onClick={getNewSentence}/>
    </div>
  );
}

export default App;
