import "./PreviewCollection.scss";
import CollectionItem from "../collection-item/CollectionItem";

const PreviewCollection = ({ title, items, length }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
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
