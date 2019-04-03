import React, {Component} from 'react'
import './Data.css'

class Data extends Component {
    constructor(props){
        super(props)
        this.state = {
            indexTracker: 0,
            message: null
        }
    }
    
    handleNext = (val) => {
        if(val < this.props.data.length - 1 ){
            this.setState({
                indexTracker: val + 1,
                message: null
            })
        }else { this.setState({ message: 'this is the last person'}) }
    //     let plusOne = val + 1
    //    this.setState({
    //        indexTracker: plusOne
    //    })
       console.log(this.state.indexTracker)
    }

    handlePrevious = (val) => {
        if(val > 0){
            this.setState({
                indexTracker: val - 1,
                message: null
            })
        } else { this.setState({message: 'this is the first person'})}
        // let minusOne = val - 1
        // this.setState({
        //     indexTracker: minusOne
        // })
        console.log(this.state.indexTracker)
    }

    handleDelete = (val) => {
        this.props.data.splice(val, 1)
        this.setState({
            indexTracker: val
        })
    }

    render(){

        return(
            <div>
                <div className="allContent_wrapped" >
                    <div className="id"> 
                        {this.props.data[this.state.indexTracker].id}/{this.props.data.length}
                    </div>
                    <h2 className="firstAndLastName" > 
                        {this.props.data[this.state.indexTracker].name.first} {this.props.data[this.state.indexTracker].name.last} 
                    </h2>
                    <div className="job_description" >
                        <div> From: 
                            {` ${this.props.data[this.state.indexTracker].city}, `}
                            {this.props.data[this.state.indexTracker].country} 
                        </div>
                        <div>
                            Job Title: {this.props.data[this.state.indexTracker].title}
                        </div>
                        <div>
                            Employer: {this.props.data[this.state.indexTracker].employer}
                        </div>
                    </div>
                    <div className="movie_div" > 
                        Favorite Movies:
                        <li> {this.props.data[this.state.indexTracker].favoriteMovies[0]} </li>
                        <li> {this.props.data[this.state.indexTracker].favoriteMovies[1]} </li>
                        <li> {this.props.data[this.state.indexTracker].favoriteMovies[2]} </li>
                    </div>
                </div>
                    <div className="allBtns" > 
                        <button 
                            onClick={() => {this.handlePrevious(this.state.indexTracker)}}
                            type="text" 
                            className="previous">
                           Previous
                         </button>
                        <button className="edit"> Edit </button>
                        <button 
                            onClick={() => {this.handleDelete(this.state.indexTracker)}}
                            className="delete"> Delete </button>
                        <button className="new"> New </button>
                        <button 
                            onClick={() => {this.handleNext(this.state.indexTracker)}} 
                            type="text"
                            className="next"
                            > 
                        Next 
                        </button>
                    </div>
                    <div className="message"> {this.state.message} </div>
            </div>
        )
    }
}

export default Data