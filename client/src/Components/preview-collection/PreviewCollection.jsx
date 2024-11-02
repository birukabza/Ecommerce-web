import "./PreviewCollection.scss";
import CollectionItem from "../collection-item/CollectionItem";
import { Link } from "react-router-dom";

const PreviewCollection = ({ title, items, length }) => (
    <div className="collection-preview">
        <Link to={`/shop/${title.toLowerCase()}`}>
            <h1 className="title">{title.toUpperCase()}</h1>
        </Link>
        <div className={`preview ${length > 4 ? 'full-preview' : ''}`}>
            {items
                .filter((item, idx) => idx < length)
                .map(({ id, ...otherProps }) => (
                    <CollectionItem key={id} id={id} {...otherProps} />
                ))}
        </div>
    </div>
);

export default PreviewCollection;
