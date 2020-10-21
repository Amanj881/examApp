

export const getUser = () => {
	const user = sessionStorage.getItem('token');
	if(user)
	{
		return user;
	} 
	else{
		return null;
	}
} 

export const  getToken = () => {
	return sessionStorage.getItem('token') || null ;
}

export const removeUser = () => {
	sessionStorage.removeItem('token');
} 

export const setToken = (token,user="") => {
	sessionStorage.setItem('token',token);
}