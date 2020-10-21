import React,{useState} from 'react'
import TextInput from "../components/TextInput/TextInput";
import Btn from '../components/Button/Button';
import axios from '../http-common';
import swal from 'sweetalert';
import {useHistory} from 'react-router-dom'

function Question() {

	
	

	const [question, setQuestion] = useState('')
	const [option1, setOption1] = useState('')
	const [option2, setOption2] = useState('')
	const [option3, setOption3] = useState('')
	const [option4, setOption4] = useState('')
	const [correctAnswer, setCorrectAnswer] = useState('')
	const [error, setError] = useState('')
	const history =  useHistory();


	const validate = (value) =>
{
	const errors = {}

	if(!value.question)
	{
		errors.question="Question Field Required"
	}
	if(!value.option1)
	{
		errors.option1="Option1 Field Required"
	}
	if(!value.option2)
	{
		errors.option2="Option2 Field Required"
	}
	if(!value.option3)
	{
		errors.option3="Option 3 Field Required"
	}
	if(!value.option4)
	{
		errors.option4="Option 4 Field Required"
	}
	if(!value.correctAnswer)
	{
		errors.correctAnswer="CorectAnswer Field Required"
	}
	return(errors);
}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		let payload = {
			question:question,
			option1:option1,
			option2:option2,
			option3:option3,
			option4:option4,
			correctAnswer:correctAnswer,
		}
		let errors = validate(payload);
		setError(errors);
		
				await axios.post('/add-question',payload).then
				((res)=>{
					swal("Good job!", "Question Add SuccessFully", "success")

					history.push('/add-question');
					setQuestion('');
					setOption1('');
					setOption2('');
					setOption3('');
					setOption4('');
					setCorrectAnswer('');
				}).catch((err)=>{
					alert(err);
				});
	}

	return (
		<div className="p-12 w-full text-center">
			<span className=" text-2xl font-bold mx-auto">Add Questions</span>
			<form onSubmit = {handleSubmit}>
			<div className="w-1/2 mx-auto">
			<TextInput
			    id="question"
				labelText="Question "
				name="question"
				onChange={(e => setQuestion(e.target.value))}
				value={question}
				invalid={error.question}
				invalidText={error.question}
				inputStyles='form-input rounded block w-full h-12 border border-blue-500' 
			              	/>
			              	</div>
			<div className="w-1/2 mx-auto">

			<TextInput
			    id="option1"
				labelText="Option 1 "
				name="op1"
				onChange={(e => setOption1(e.target.value))}
				value={option1}
				invalid={error.option1}
				invalidText={error.option1}
				// inputStyles={`form-input rounded block w-full h-12 ${error ? 
				// 			"bg-error-light border-1 border-error" : "border-1 border-black-4 bg-white-100"
				// 				}`}
			              	/>
			 </div>
			<div className="w-1/2 mx-auto">
               				             	
			<TextInput
			    id="option2"
				labelText="Option 2 "
				name="option2"
				onChange={(e => setOption2(e.target.value))}
				value={option2}
				invalid={error.option2}
				invalidText={error.option2}
				// inputStyles={`form-input rounded block w-full h-12 ${error ? 
				// 			"bg-error-light border-1 border-error" : "border-1 border-black-4 bg-white-100"
				// 				}`}
			              	/>  
			    </div>
			    			          	
			   	<div className="w-1/2 mx-auto">
           	
			<TextInput
			    id="option3"
				labelText="Option 3 "
				name="option3"
				onChange={(e => setOption3(e.target.value))}
				value={option3}
				invalid={error.option3}
				invalidText={error.option3}
				// inputStyles={`form-input rounded block w-full h-12 ${error ? 
				// 			"bg-error-light border-1 border-error" : "border-1 border-black-4 bg-white-100"
				// 				}`}
			              	/>
			    </div>          	
			<div className="w-1/2 mx-auto">

			<TextInput
			    id="option4"
				labelText="Option 4 "
				name="option4"
				onChange={(e => setOption4(e.target.value))}
				value={option4}
				invalid={error.option4}
				invalidText={error.option4}
				// inputStyles={`form-input rounded block w-full h-12 ${error ? 
				// 			"bg-error-light border-1 border-error" : "border-1 border-black-4 bg-white-100"
				// 				}`}
			              	/>  
			</div>

			<div className="w-1/2 mx-auto">

			<TextInput
			    id="correctAnswer"
				labelText="Correct Answer "
				name="correctAnswer"
				onChange={(e => setCorrectAnswer(e.target.value))}
				value={correctAnswer}
				invalid={error.correctAnswer}
				invalidText={error.correctAnswer}
				// inputStyles={`form-input rounded block w-full h-12 ${error ? 
				// 			"bg-error-light border-1 border-error" : "border-1 border-black-4 bg-white-100"
				// 				}`}
			              	/>  
			</div>  
			 <div className="w-1/2 mx-auto mt-6">
		                <span className="block w-full rounded-md shadow-sm">
		                  <Btn type="submit" width="full" 
							>
		                   Add Issue
		                  </Btn>
		                </span>
		              </div>  
		              </form>          	              	              	        	
		</div>
	)
}

export default Question