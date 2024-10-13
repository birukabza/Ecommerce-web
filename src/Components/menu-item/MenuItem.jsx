import "./MenuItem.scss"
import { useNavigate } from 'react-router-dom'

const MenuItem = (props) => {
    const { title, imageUrl, size, linkUrl } = props
    const styles = {
        backgroundImage: `url(${imageUrl})`,
    };

    const navigate = useNavigate();

    return (
        <div
            className={`${size} menu-item`}
            onClick={() => navigate(`${linkUrl}`)}
        >
            <div style={styles} className="background-image"></div>
            <div className="content">
                <h1 className="main-title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    );
};

export default MenuItem;
