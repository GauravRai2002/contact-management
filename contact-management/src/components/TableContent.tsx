import React from 'react'
import { useRef } from 'react';
import { IType } from '../interfaces';
import { useDispatch } from 'react-redux';
import { removeContact, updateContact } from '../store/slices/UserSlice';

const TableContent = ({ id, firstName, lastName, active }: IType) => {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const modal = useRef<HTMLDialogElement | null>(null)
    const jobRef = useRef<HTMLInputElement | null>(null);
    const activeRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch()

    const handleDelete = () => {

        dispatch(removeContact(id))
    }
    const handleEdit = () => {
        dispatch(updateContact({
            'id': id,
            'firstName': nameRef.current?.value,
            'lastName': jobRef?.current?.value,
            'active': activeRef?.current?.value
        }))
    }
    return (<>
        <tr className="bg-base-200">
            <td className='text-center'>{firstName}</td>
            <td className='text-center'>{lastName}</td>
            <td className='text-center'>{active}</td>
            <td className='flex items-center justify-center'>
                <button className="btn btn-primary px-4 my-1" onClick={() => modal.current?.showModal()}>Edit</button>
                <dialog id="edit" className="modal" ref={modal}>
                    <form method="dialog" className="modal-box">
                        <input type="text" placeholder="Type First Name" className="input input-bordered w-full  my-3" ref={nameRef} required />
                        <input type="text" placeholder="Type Last Name" className="input input-bordered w-full  my-3" ref={jobRef} required />
                        <div className="status flex items-center justify-evenly my-3 w-full">
                            <div>Status :</div>
                            <div className="options">
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Inactive</span>
                                        <input type="radio" name="radio-10" ref={activeRef} value={'Inactive'} className="radio checked:bg-red-500"  />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Active</span>
                                        <input type="radio" name="radio-10" ref={activeRef} value={'Active'} className="radio checked:bg-blue-500"  />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-action">
                            {/* <button className="btn">Close</button> */}
                            <button className="btn btn-accent btn-outline px-16" onClick={handleEdit}>ADD</button>
                        </div>
                    </form>
                </dialog>
                <button className="btn btn-error mx-1 px-4" onClick={handleDelete}>
                    Delete
                </button>
            </td>
        </tr>
    </>
    )
}

export default TableContent