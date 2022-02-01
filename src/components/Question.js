import React, { useEffect, useState } from 'react';
import '../styles/question.css';
// import Timer from './Timer';
import { useHistory } from 'react-router-dom';

const Question = (props) => {
  const { pickCategory } = (props.location && props.location.pickCategory) || {};
  const { type } = (props.location && props.location.type) || {};
  const { difficulty } = (props.location && props.location.difficulty) || {};
  const { totalQuestions } = (props.location && props.location.totalQuestions) || {};

  const [data, setData] = useState();
  const [selectedAns, setSelectedAns] = useState();
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [thisCorrectAnswer, setThisCorrectAnswer] = useState(false);




  const handleD = () => {

    history.push( {pathname: '/',
    correctAnswer:{correctAnswer}});
  }



  useEffect(() => {
    const url = `https://opentdb.com/api.php?amount=${totalQuestions}&category=${pickCategory}&difficulty=${difficulty}&type=${type}`
    // const url = `https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple`
    fetch(url)
      .then(response => response.json())
      .then(res => setData(res.results))
      console.log(data);
  }, []);


  const history = useHistory();

const handleSubmit =(e)=>{
  // setSelectedAns(e.target.value);

  if(thisCorrectAnswer ===true)
setCorrectAnswer(correctAnswer+1);

setThisCorrectAnswer(!thisCorrectAnswer)
console.log(data);
console.log(correctAnswer);
} 




  return (<div className='question'>
    {
      data?.map(({ index, question, correct_answer, incorrect_answers }) =>
        <div className='question__body' key={index}>

          <div className='question__body__question'> <p>{question}</p></div>
          <div className='question__body__answers'>
            <ul>
              {
                incorrect_answers?.map((ind) => <li onClick={()=>setThisCorrectAnswer(true)} value={selectedAns} key={ind}>{ind}</li>)
              }
              <li onClick={()=>setThisCorrectAnswer(true)} >{correct_answer}   </li>
            </ul>
          </div>

          <div className='question__body__quit'>
            <div>Correct Answers: 2</div>
            <button onClick={handleD}>Quit</button>
          </div>
          <button type='submit' onClick={handleSubmit}>Quit</button>
        </div>
      )
    
    }
 
  </div>)
};

export default Question;
