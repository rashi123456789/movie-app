import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import MovieList from './MoviesList'
import MovieShow from './MoviesDetails'
import 'bootstrap/dist/css/bootstrap.css';
function App(props)
{
    return(
        <BrowserRouter>
            <div>
                <h2>Movie Application!!!</h2>
                <Link to='/'></Link>

                <Route path='/' component={MovieList} exact={true}/>
                <Route path='/movies/:id' component={MovieShow}/>
            </div>
        </BrowserRouter>
    )
}

export default App