import React, { Component } from 'react';
import { getBooks } from '../services/books'
import BookItem from './Books/BookItem'
//Can be called container component
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount(){
        getBooks(3,0,'desc')
        .then((books) => {
            console.log(books)
            this.setState({books})
        })
    }

    renderItems = (books) => (
        books ? 
        books.map((item,i) => (
            <BookItem key={i} item={item} />
        ))
        : null
    )

    loadMore = () => {
        const { books } = this.state;
        let count = books.length;
        getBooks(3,count,'desc',books)
        .then((books) => {
            this.setState({books})
        })
    }

    render() {
        const {books} = this.state;
        console.log(books)
        return (
            <div>
                {this.renderItems(books)}
                <div className="loadmore"
                    onClick={this.loadMore}
                >Load More</div>
            </div>
        );
    }
}

export default Home
