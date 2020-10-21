import React from 'react'

function TableHeader({headers}) {
	return (
		
			<thead className="thead-dark" >
				<tr className="header-0">
				{headers.map((head,index)=>{
					return (
						<th key={index} className="px-6 py-3  text-left text-xs leading-4 font-medium text-white  bg-black uppercase tracking-wider">
							<div>
								{head}
							</div>
						</th>	
				)})}
				</tr>
			</thead>
		
	)
}

export default TableHeader