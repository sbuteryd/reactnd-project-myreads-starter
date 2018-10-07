import React,{Component} from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Second from './second'
import CreateContact from './CreateContact'



class Fist extends Component{
    state ={
        books:[],
    };

    getCurrent = (book, shelf) => {
        if (this.state.books) {
            BooksAPI.update(book,shelf).then(() => {
                book.shelf = shelf;
                this.setState(state => ({
                    books: state.books.filter(b => b.id !== book.id).concat([ book ])
                }))
            })
        }
    };

    componentDidMount(){
        BooksAPI.getAll().then((books) =>{
            this.setState({books})
        })
    }

    render(){
        return(
            <div className='app'>
                <Route exact path="/"  render={()=>(<Second
                        books={this.state.books}
                        getCurrent={this.getCurrent}/>)}
                       />
                <Route  path='/create'
                        render={()=>(<CreateContact
                            goodMan={this.state.books}
                            getCurrent={this.getCurrent}/>)}/>
            </div>
        )
    }
}
export default Fist


