import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import Fist from './Fist'
import * as BooksAPI from './BooksAPI'
import  CreateContact from './CreateContact'

class Second extends Component{
    render(){
       const {books,getCurrent} = this.props;
        let currentlyReading ,wantToRead,read;
        currentlyReading = books.filter((book) => book.shelf ==='currentlyReading');
        wantToRead = books.filter((book) => book.shelf ==='wantToRead');
        read =books.filter((book) => book.shelf ==='read');
        const bookState = ["currentlyReading", "wantToRead", "read"];

        return(
            <div>
                <Link to='/create' className="open-search">Add Contact</Link>
                <h2 className="bookshelf-title">Currently Reading</h2>
                <ol className="books-grid">
                {currentlyReading.map((current) =>(
                        <li key={current.id}>
                            <div    className="book ">
                        <div className="book-top">
                            <div className="book-cover" style={{width: 128, height: 192,backgroundImage:`url(${current.imageLinks.thumbnail})`}}></div>
                            <div  className="book-shelf-changer">
                                <select value={bookState[0]} onChange={(event) => getCurrent(current,event.target.value)} >
                                    <option value="none" disabled >Move to...</option>
                                    <option value="currentlyReading"  >Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{current.title}</div>
                        <div className="book-authors">{current.authors}</div>
                    </div>
                </li>

            ))}
            </ol>
                <div>
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <ol className="books-grid">
                    {wantToRead.map((want)=>(
                            <li key={want.id}>
                                <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{width: 128, height: 192,backgroundImage:`url(${want.imageLinks.thumbnail})`}}></div>
                                <div className="book-shelf-changer">
                                    <select value={bookState[1]} onChange={(event) => getCurrent(want,event.target.value)}  >
                                        <option value="none" disabled >Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{want.title}</div>
                            <div className="book-authors">{want.authors}</div>
                        </div>
                    </li>
                ))}
                    </ol>
                </div>

                <div>
                    <h2 className="bookshelf-title">Read</h2>
                    <ol className="books-grid">
                        {read.map((read) =>(
                            <li key={read.id}>
                        <div  className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{width: 128, height: 192,backgroundImage:`url(${read.imageLinks.thumbnail})`}}></div>
                                <div   className="book-shelf-changer">
                                    <select  value={bookState[2]} onChange={(event) => getCurrent(read,event.target.value)} >
                                        <option value="none" disabled >Move to...</option>
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
                ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export  default Second