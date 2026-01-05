import "../styles/Header.css";

// Hero section including a call-to-action (CTA) button
const Header = (props) => {
    return (
        <header className="flex bg-card">
            <div className="header-left">
                <img 
                    src={props.imageUrl} 
                    alt={props.imageAlt}
                    className="header-img" 
                />
            </div>
            <div className="header-right">
                <h1>{props.title}</h1>
                <p className="text-faded">{props.description}</p>
                <a href={props.ctaLink} >
                    <button className="header-btn">{props.ctaText}</button>
                </a>
            </div>
        </header>
    );
};

export default Header;