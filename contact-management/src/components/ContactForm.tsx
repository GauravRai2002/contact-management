import React from 'react'
import { useRef } from 'react';
import Table from './Table';
import { log } from 'console';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/slices/UserSlice';
import { IType } from '../interfaces';
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store';


function ContactForm() {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const jobRef = useRef<HTMLInputElement | null>(null);
    const activeRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch()
    const myState: IType[] = useSelector((state: RootState) => state.users)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const da = {
            'id': myState.length,
            'firstName': nameRef.current?.value,
            'lastName': jobRef.current?.value,
            'active': activeRef.current?.value,
        }
        dispatch(addContact(da))
    }
    return (
        <>
            <form className='flex-col flex items-start justify-center w-1/2 h-fit p-8 my-3 mx-auto' onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Type First Name" className="input input-bordered w-full my-3" ref={nameRef} required />
                <input type="text" placeholder="Type Last Name" className="input input-bordered w-full my-3" ref={jobRef} required />
                <div className="status flex items-center justify-evenly my-3 w-full">
                    <div>Status :</div>
                    <div className="options">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Inactive</span>
                                <input type="radio" name="radio-10" ref={activeRef} value='Inactive' className="radio checked:bg-red-500 mx-3"  />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Active</span>
                                <input type="radio" name="radio-10" ref={activeRef} value='Active' className="radio checked:bg-blue-500 mx-3"  />
                            </label>
                        </div>
                    </div>
                </div>

                <button type='submit' className="btn w-full btn-accent btn-outline px-16" >ADD</button>
            </form>

            <Table />
        </>
    )
}

export default ContactForm