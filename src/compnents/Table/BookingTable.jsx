import DeleteBooking from '@/app/my-booking/component/DeleteBooking';
import { FilePenLine, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookingTable = ({ data }) => {
    return (
        <div className="overflow-x-auto mt-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-[21px]'>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Service Date</th>
                        <th>Service Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => <tr className='text-[16px] font-semibold' key={item._id}>
                            <td>
                            {/* {item.service_img} */}
                                {/* <Image src={data.sservice_img} className='h-28' width={150} alt='logo'></Image> */}
                                <Image src={item.service_img} width={100} height={100} alt={item.service_name}></Image>
                            </td>
                            <td>{item?.service_name}</td>
                            <td>{item?.address}</td>
                            <td>{item?.phone}</td>
                            <td>{item?.date}</td>
                            <td>${item?.service_price}</td>
                            <th>
                                <Link href={`/my-booking/${item._id}`} className="btn btn-ghost h-20 w-20"><FilePenLine /></Link>
                            </th>
                            <th>
                               <DeleteBooking id={item._id}></DeleteBooking>
                            </th>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default BookingTable;