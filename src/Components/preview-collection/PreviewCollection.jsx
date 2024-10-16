import "./PreviewCollection.scss";
import CollectionItem from "../collection-item/CollectionItem";

const PreviewCollection = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherProps}) => (
                    <CollectionItem key={id} id ={id} {...otherProps}/>
                ))}
        </div>
    </div>
);

export default PreviewCollection;
