import React ,{Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Fist from './Fist'
import PropTypes from 'prop-types'
import BooksApp from "./App";

class CreateContact extends Component{
    state ={
        query:'',
        books:[],
    };
    updateQuery = (query) => {
        if (!query) {
            this.setState({query: '', books: []})
        } else {
            this.setState({ query: query.trim()});
            BooksAPI.search(query).then((books) => {
                if (books.error) {
                    books = []
                }
                books.map(book => (this.props.goodMan.filter((b) => b.id === book.id) .map(b => book.shelf = b.shelf)))
                this.setState({books})
            })
        }
    };
    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'  className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input  value={this.state.query}  onChange={(event)=>this.updateQuery(event.target.value)} type="text" placeholder="Search by title or author"/>
                    </div>
                </div>
                <div>
                    <ol className="books-grid">
                        {this.state.books.length  ? (
                            this.state.books.map((read) =>(
                                <li key={read.id}>
                                    <div  className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{width: 128, height: 192,backgroundImage:`url(${read.imageLinks !==undefined ? read.imageLinks.thumbnail :' '})`}}></div>
                                            <div   className="book-shelf-changer">
                                                <select value={read.shelf} onChange={(event) => this.props.getCurrent(read,event.target.value)}>
                                                    <option value="none" >Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{read.title}</div>
                                        <div className="book-authors">{read.authors}</div>
                                    </div>
                                </li>
                            ))):(<div className='nothing'>Can't find</div>)}
                    </ol>
                </div>
            </div>
        )
    }
}
export default CreateContact