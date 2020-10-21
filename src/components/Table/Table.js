import React from 'react'
import TableHeader from './TableHeader';
import TableBody from './TableBody';

function Table({headers,rows}) {
	return (
		<div className=" overflow-hidden border-b border-gray-200 sm:rounded-lg">
		<table className="mx-auto min-w-full divide-y divide-gray-200" >
      <TableHeader headers={headers} ></TableHeader>
      <TableBody headers={headers} rows={rows}></TableBody>
      </table>
		</div>
	)
}

export default Table