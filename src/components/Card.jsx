import "../styles/Card.css";

const Card = ({ image, title, description }) => {
    return (
        <article className="card bg-card">
            <div className="card-top">
                <img 
                    src={image.url}
                    alt={image.alt}
                />
            </div>
            <div className="card-bottom">
                <p className="card-title">{title}</p>
                <p className="card-description text-faded">{description}</p>
            </div>
        </article>
    );
};

export default Card;