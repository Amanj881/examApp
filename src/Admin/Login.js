import React,{useState} from 'react';
import '../styles/main.css';
import TextInput from "../components/TextInput/TextInput";
import TextPassword from "../components/Password/Password";
import axios from '../http-common';
import Button from "../components/Button/Button";
import { useHistory } from "react-router-dom";
import { setToken } from '../utils/Common';
function Login() {

const validate = (value) => {
const error={};
if(!value.email)
{
  error.email = "Please insert email"
}
if(!value.password)
{
  error.password = "Please insert password"
}
return(error);
}
const history = useHistory();
const[email,setEmail]=useState();
const[password,setPassword]=useState();
const [signedIn, setSignedIn] = useState(false);
const [loading, setLoading] = useState(false);
const [errors, setErrors] = useState('');

const handleSubmit =async (e) =>{
	if(e)
		e.preventDefault();


	let payload = {
			email: email,
			password: password,
		};
      let err = validate(payload);
      setErrors(err);
         setLoading(true);

		await axios.post('/auth/login',payload).
		then((res)=>{

      setToken(res.data.access_token);

			history.push("/add-question")
		}).catch(e => {
      setErrors(e)
    });
}


  return (
  	<>
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Admin Login
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} autoComplete="new-password">
              <TextInput
                	id="email"
        					labelText="Email"
        					onChange={(e => setEmail(e.target.value))}
        					value={email}
        					name="email"
                  invalid={errors.email}
                  invalidText={errors.email}
					
              />

              <div className="mt-6">
                <TextPassword
                  id="password"
					labelText="Password"
					onChange={e => setPassword(e.target.value)}
					value={password}
					name="password"
					autoComplete="new-password"
           invalid={errors.password}
                  invalidText={errors.password}

                />
              </div>

                
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <Button type="submit" width="full" disable={loading}
					loading={loading}>
                    Sign in
                  </Button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
