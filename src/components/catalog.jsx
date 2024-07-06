import './styles/catalog.css';
import Product from './product';

const catergories = ['Fruits', 'Vegetables', 'Diary', 'Electronics' ];

const data = [
    {
        title: "Fruits",
        price: 12.33,
        catelog: "fruit",
        image: "eatingfruit.jpg",
        category: "Fruits",
    },
    {
        title: "Vegetables",
        price: 15.99,
        catelog: "vegetable",
        image: "vegetables.jpg",
        category: "Vegetables",
    },
    {
        title: "Diary", 
        price: 3.75,
        catelog: "dairy",
        image: "milk.jpg",
        category: "Diary",
    },
    {
        title: "Meat",
        price: 55.50,
        catelog: "meat",
        image: "meat.jpg",
        category: "Meat",
    },

];



function Catalog(){
    return(
        <div className='catalog'>
            <h1>Catalog Page</h1>

            <div className='filters'>
            {catergories.map(cat => <button className='btn btn-sm btn-success'>{cat}</button>)}
            </div>


            {data.map(prod => <Product info={prod} /> )} 

        </div>
    );

}

export default Catalog;