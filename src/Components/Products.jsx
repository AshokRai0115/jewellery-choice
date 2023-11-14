import './Products.css';

function Products(props){
    return(
        <div className='container'>
            <div className='img-div'>
            <img src={props.image} alt={props.name} />
            </div>
            <p className='tag'>{props.tag}</p>
            <div className='description'>
            <p className='name'>{props.name}</p>
            <p className='price'>Price {props.price}</p>
            </div>
        </div>
    )
}

export default Products