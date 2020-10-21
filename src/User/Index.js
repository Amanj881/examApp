import React,{useState,useEffect,useRef} from 'react'
import axios from '../http-common';
import Btn from '../components/Button/Button';
// import _ from 'lodash'


function Index() {

	const [count, setCount] = useState(0);
	const [questions, setQuestions] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [score, setScore] = useState(0);
  	const [showFinished, setShowFinished] = useState(false);
	const [timer, setTimer] = useState(15)
	const [selectAnswer, setSelectAnswer] = useState('');


	useEffect(() => {
		getQuestions();
	}, [])

	
	useEffect(() => {
		const time =
			timer > 0 && setInterval(()=>setTimer(timer-1),1000) 
		    return () => clearInterval(time);

	}, [timer])


	useEffect(() => {
		if(timer===0 && currentIndex + 1 > questions.length - 1)
		{
			setShowFinished(true);
     				 return;
		}
		if(timer===0)
		{
			setCurrentIndex(currentIndex+1);
			setTimer(15);
		}
		 
	}, [timer])
	
	const resetQuiz = () => {
    setCurrentIndex(0);
    setShowFinished(false);
    setScore(0);
    setTimer(15);
  };


	const getQuestions = async () => {
		await axios.get('/get-questions').then((res)=>{
			setQuestions(res.data)
			})
		
	}
	const handleNext = () => {
		console.log(selectAnswer,questions[currentIndex].correctAnswer);
		 setCurrentIndex(currentIndex+1);
		setTimer(15);		
		if(questions[currentIndex].correctAnswer === selectAnswer)
		{
			setScore(score + 2);
		}


		if(currentIndex + 1 > questions.length   - 1) {
			
      			setShowFinished(true);
     				 return;
    }
		

	}

	return questions.length ? (
    <div>
      {showFinished ? (
        <div className="pt-auto mx-auto w-1/2 shadow-lg border-0 rounded-lg">
          
          <h3>
            Your results are out. You scored {score} out of {questions.length*2}
          </h3>
        </div>
      ) : (
        <div className=" m-32 mx-auto w-1/2 shadow-lg border-0 rounded-lg"><h5 className="text-center font-bold text-2xl">Mcq Question</h5>
				<div className="flex justify-around"><span>Marks: {score}</span>
				<span>Timer: {timer}</span></div>

				<hr/>
				<div className="flex  text-xl p-2">
				{questions[currentIndex].question}
				</div>
				<div className="flex justify-around w-full " onChange={(e)=>setSelectAnswer(e.target.value)}>
					<span className=""><input type="radio" checked ={selectAnswer === questions[currentIndex].option1} name="answer"   value={questions[currentIndex].option1} />{questions[currentIndex].option1}</span>
					<span><input type="radio" name="answer" checked ={selectAnswer === questions[currentIndex].option2} value={questions[currentIndex].option2}/>{questions[currentIndex].option2}</span>
					<span><input type="radio" name="answer"  checked ={selectAnswer === questions[currentIndex].option3} value={questions[currentIndex].option3}/>{questions[currentIndex].option3}</span>
					<span><input type="radio" name="answer"  checked ={selectAnswer === questions[currentIndex].option4}  value={questions[currentIndex].option4}/>{questions[currentIndex].option4}</span>
				</div>
				 <div className="w-1/2 mx-auto items-end mt-6">
		                <span className="block w-full rounded-md shadow-sm">
		                  <Btn type="submit" width="full" buttonClick = {()=>handleNext()}
							>
		                  {questions.length === currentIndex+1 ? "Submit" :"Next Question"}
		                  </Btn>
		                </span>
		              </div> </div>
			      )}
			      {showFinished ? (
			        <button className="try-again" onClick={resetQuiz}>
			          Try again
			        </button>
			        ) : (
			        <div className="pt-auto mx-auto w-1/2 shadow-lg border-0 rounded-lg">
			          {currentIndex + 1}/{questions.length}
			        </div>
			      )}
			    </div>
			  ) : (
			    <p>Loading...</p>
			  );
}

export default Index