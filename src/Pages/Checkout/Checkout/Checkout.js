import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    /* const [user, setUser] = useState({
        name: 'Hudson',
        email: 'hudson@gmail.com',
        address: 'London',
        phone: '019839302'
    });
    const handleAddressChange = event => {
        console.log(event.target.value);
        const { address, ...rest } = user;
        const newAddress = event.target.value;
        const newUser = { address: newAddress, ...rest };
        setUser(newUser);
    } */
    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is placed!!');
                    event.target.reset();
                }
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" name="name" value={user?.displayName} placeholder='name' required readOnly disabled id="" />
                <br />
                <input className='w-100 mb-2' type="email" name="email" value={user?.email} placeholder='email' required readOnly disabled id="" />
                <br />
                <input className='w-100 mb-2' type="text" name="service" value={service.name} placeholder='service' required readOnly id="" />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required id="" />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required id="" />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;