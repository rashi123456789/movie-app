import React from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class MovieShow extends React.Component{
    constructor(){
        super()
        this.state={
            show:{}
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`http://www.omdbapi.com/?i=${id}&apikey=caac10e0`)
        .then(response=>{
            const show=response.data
            console.log('movie show',show)
            this.setState({show})
        })
    }
    render(){
        // console.log('show',this.state.show.title)
        return(
            <div>
                <Card style={{ width: '22 rem' }}>
                    <Card.Img variant="top" src={this.state.show.Poster}/> 
                    <Card.Body>
                        <Card.Title>
                            <b>Movie Name:--- {this.state.show.Title}</b>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            <b>
                                RunTime:- {this.state.show.Runtime}<br/>
                                Year of release:- {this.state.show.Year} <br/>
                                country:--{this.state.show.Country}<br/>
                                Genre - {this.state.show.Genre}<br/>
                                Language - {this.state.show.Language}
                            </b>
                        </Card.Subtitle>
                        <Card.Text>
                            <b>Actors:----{this.state.show.Actors}</b><br/>
                            <b>Description:--{this.state.show.Plot}</b>
                        </Card.Text>
                        <Card.Link href="/">Back</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default MovieShow