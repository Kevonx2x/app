import { useState } from 'react';
import './styles/admin.css';
import ImageSlider from '../ImageSlider';

const AdminPage = () => {
    const [product, setProduct] = useState({
        title: "",
        image: "",
        price: "",
        category: ""
    });

    function handleProduct(e) {
        const text = e.target.value; // the value of the field
        const name = e.target.name; // what input field changed?
        // create a copy
        let copy = {...product};
        // modify the copy
        copy[name] = text;
        // set the copy back
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product);
    }

    const [coupon, setCoupon] = useState({
        code: '',
        discount: '',
    });

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
                    <h2>Products</h2>
                    <p>Here you can add, update, or delete trading cards.</p>

                    <div>
                        <label htmlFor="title">Title:</label>
                        <input onBlur={handleProduct} type="text" id="title" name="title" />
                    </div>
                    <div>
                        <label htmlFor="image">Image:</label>
                        <input onBlur={handleProduct} type="text" id="image" name="image" />
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input onBlur={handleProduct} type="number" id="price" name="price" />
                    </div>
                    <div>
                        <label htmlFor="category">Category:</label>
                        <input onBlur={handleProduct} type="text" id="category" name="category" />
                    </div>

                    <button onClick={saveProduct} className='btn btn-sm btn-success' >Save Product</button>
                </div>






                <div className="admin-section">
                    <h2>Coupons</h2>
                    <p>Looking for a discount?!</p>

                    <div>
                        <label htmlFor="couponCode">Code:</label>
                        <input onBlur={handleCoupon}  type="text" id="couponCode" name="couponCode" />
                    </div>
                    <div>
                        <label htmlFor="couponDiscount">Discount (%):</label>
                        <input onBlur={handleCoupon}  type="number" id="couponDiscount" name="couponDiscount" />
                    </div>

                    <div>
                    <button  onClick={saveCoupon} className='btn btn-sm btn-success' >Redeem</button>
                    </div>
                </div>
            </main>
            <div className="admin img">
                


            </div>
            <ImageSlider  />
        </div>
    );
};

export default AdminPage;
