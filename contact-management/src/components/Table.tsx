import React from 'react'
import TableContent from './TableContent'
import { IType } from '../interfaces'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

function Table() {
    const myState:IType[] = useSelector((state:RootState)=>state.users)
  return (
    <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Job</th>
                            <th className='text-center'>Favorite Color</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           myState.map((stt,i)=>{
                            return <TableContent id={i} firstName={stt.firstName} lastName={stt.lastName} active={stt.active} key={i}/>
                        })
                        }
                    </tbody>
                </table>
            </div>
  )
}

export default Table