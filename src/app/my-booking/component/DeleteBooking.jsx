"use client"
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const DeleteBooking = ({id}) => {
    const router = useRouter()
    const handleDelete= async(id)=>{
        const res = await fetch(`http://localhost:3000/api/service/${id}`,{
            method: "DELETE"
        })
        const deleteData = await res.json()
        router.refresh()
        console.log(deleteData);
    }
    return (
        <div>
            <button onClick={()=>handleDelete(id)} className="btn btn-ghost h-20 w-20"><Trash2 /></button>
        </div>
    );
};

export default DeleteBooking;