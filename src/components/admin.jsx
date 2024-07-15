import { useState } from 'react';
import './styles/admin.css';

const AdminPage = () => {

    const [coupon, setCoupon] = useState({});

    function handleCoupon(e) {
        const text = e.target.value; // the value of the field
        const name = e.target.name; // what input field changed?
        // create a copy
        let copy = {...coupon};
        // modify the copy
        copy[name] = text;
        // set the copy back
        setCoupon(copy);
    }

    function saveCoupon() {
        console.log(coupon);
    }

    return (
        <div className="admin-container">
            <header className="admin-second-header">
                <h1>Raiders Trading Cards Admin Page</h1>
            </header>
            <main className="admin-main">
                <div className="admin-section">
                    <h2>Manage Cards</h2>
                    <p>Here you can add, update, or delete trading cards.</p>
                    <button className='btn btn-sm btn-success' >LETS GOOO!</button>
                </div>
                <div className="admin-section">
                    <h2>Coupons</h2>
                    <p>Looking for a discount?!</p>

                    <div>
                        <label htmlFor="couponCode">Code:</label>
                        <input onChange={handleCoupon}  type="text" id="couponCode" name="couponCode" />
                    </div>
                    <div>
                        <label htmlFor="couponDiscount">Discount (%):</label>
                        <input onChange={handleCoupon}  type="number" id="couponDiscount" name="couponDiscount" />
                    </div>
                    <button  onClick={saveCoupon} className='btn btn-sm btn-success' >LETS GOOO!</button>
                </div>
            </main>
        </div>
    );
};

export default AdminPage;
