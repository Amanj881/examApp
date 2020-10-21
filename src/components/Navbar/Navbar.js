import React,{useState} from 'react';
import "./Navbar.css";

function Navbar({searching,menuOptions}) {

	const [searchBar, setSearchBar] = useState(searching)


	
	return (
		
			<div className="w-full h-auto p-6 bg-gray-200 shadow-lg ">
				<div className="flex justify-between">
					<h1 className="leading-none text-2xl text-grey-darkest">
      					<a className="no-underline text-grey-darkest hover:text-black" href="#">
        					Site Title
     					 </a>
    				</h1>
    				{searchBar && (
    					<form className="mb-4 w-full md:mb-0 md:w-1/4">
   						<label className="hidden">Search</label>
    					<input className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search" type="text" />
    					<button className="hidden">Submit</button>	
  					</form>
    					) }
    			<nav>
				    <ul className="list-reset md:flex md:items-center">
				      <li className="md:ml-4">
				       {options}
				      </li>
				     
				    </ul>
  				</nav>
				</div>
			</div>
		
	)
}

export default Navbar;