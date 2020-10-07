import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class MovieList extends React.Component{
    constructor(){
        super()
        this.state={
            movies:[],
            data:'',
        }
    }
    handleSearch=(e)=>{
        const data=e.target.value
        this.setState({data})
        axios.get(`http://www.omdbapi.com/?apikey=caac10e0&s=${data}&type=movie`)
        .then(response=>{
            const search=response.data.Search
            console.log('movies list',search)
            this.setState({movies:search})
        })
        .catch(err=>{
            console.log(err)
        })
        this.setState({
            search:e.target.value
        })
    }
    render(){
        console.log('state',this.state.movies)
        return(
            <div>
                <input type='search' name='data' onChange={this.handleSearch} placeholder='search title'></input>
                
                {
                    this.state.movies!=undefined?(
                        <div>
                            <ul>
                                {
                                    this.state.movies.map((ele,i)=>{
                                        return (<li key={i}><Link to={`/movies/${ele.imdbID}`}>{ele.Title}</Link></li>)
                                    })
                                }
                            </ul>
                        </div>):('')
                }
                
            </div>
        )
    }
}
export default MovieList