import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user, setUser] = useState({
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
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name}</h2>
            <form>
                <input className='w-100 mb-2' type="text" name="name" value={user.name} placeholder='name' required id="" />
                <br />
                <input className='w-100 mb-2' type="email" name="email" value={user.email} placeholder='email' required id="" />
                <br />
                <input className='w-100 mb-2' type="text" name="service" value={service.name} placeholder='service' required id="" />
                <br />
                <input className='w-100 mb-2' onChange={handleAddressChange} type="text" name="address" value={user.address} placeholder='address' required id="" />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" value={user.phone} placeholder='phone' required id="" />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;