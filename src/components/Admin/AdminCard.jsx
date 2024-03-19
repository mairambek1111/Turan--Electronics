import {Link} from "react-router-dom";

const AdminCard = ({el}) => {
    return (
        <Link to={`/admin/products/${el.id}`}>
            <div className='admin--block__all--card'>
                <center><img src={el.image} alt=""/></center>
                <div className="admin--block__all--card__description">
                    <h2>{el.title}</h2>
                    <p>{el.price} сом</p>
                </div>
            </div>
        </Link>
    );
};

export default AdminCard;