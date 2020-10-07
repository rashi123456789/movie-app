import React from 'react'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import MovieList from './MoviesList'
import MovieShow from './MoviesDetails'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
function App(props)
{
    return(
        <BrowserRouter>
            <div>  
                <Link to='/'></Link>
                <Switch>
                    <Route path='/' component={MovieList} exact={true}/>
                    <Route path='/movies/:id' component={MovieShow}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App