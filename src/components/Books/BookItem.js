import React from 'react';
//stateless functional component
// Before v16.7.0 we can't use lifeccle in functional component but now we have hooks
const BookItem = props => {
    const item = props.item;
    console.log(props)
    return (        
        <div to={`/books/${item._id}`} className="book_item">
            <div className="book_header">
                <h2>{item.name}</h2>
            </div>
            <div className="book_items">
                <div className="book_bubble">
                    <strong>Price</strong> $ {item.price}
                </div>

                <div className="book_bubble">
                    <strong>Pages</strong> {item.pages}
                </div>

                <div className="book_bubble rating">
                    <strong>Rating</strong> {item.rating}
                </div>
            </div>
        </div>
    );
}

export default BookItem;
