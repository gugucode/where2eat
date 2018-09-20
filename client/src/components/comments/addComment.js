import React from "react";
import API from "../../utils/API";
import $ from "jquery";
import ShowComments from "./showComments";



class Saved extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comment: "",
      id: '',
      allComment: [],
      numlike: ""
    }
  }

  componentDidMount = () => {
    this.getAllComments(this.props.id)
    this.getNumLike(this.props.id);
  }

  getAllComments = (id) => {
    API.getComment(id)
      .then(result => {
        console.log(result)
        this.setState({
          allComment: result.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  getNumLike = (id) => {
    API.getNumLike(id)
      .then(result => {
        console.log(result)
        this.setState({
          numlike: result.data[0].numlike
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleLikeButton = (id) => {
    API.likeRestaurant(id)
    .then(result => {
        console.log(result);
        // if(result.status === 200){
            // $(`#rest${id}`).remove();
            this.getNumLike(id);
        // }
    });
  }

  handInputChange = (event) => {
    const { name , value } = event.target;
    this.setState({
      [name] : value
    })
  }

  saveCommentButton = (event) => {
    
    console.log ("saveComment: ", this.state.comment);
    const newComment = {
        comment: this.state.comment,
        restId: this.props.id,
        creator: this.props.user,
    };

    API.saveComment(newComment)
    .then(result => {
      console.log(result);
      $(`#saveStatus${this.props.id}`).text("Saved comment!");
      this.setState({
        comment: ""
      })
      this.getAllComments(this.props.id);
    })
  
  
  }

  render() {
  
  return (
  <div className="container px-0">
    {/* collapse for add comment */}
    <div className="collapse" id={`${this.props.id}`} tabIndex="-1" role="dialog">

      <div className="collapse-content">
        {/* <form> */}
        <div className="collapse-header">
          <h6 className="collapse-title my-0">Add Comment Here...</h6>
        </div>
        <div className="collapse-body">
          <textarea className ="form-control" name="comment" value={this.state.comment} onChange={this.handInputChange}/>
          <button className="btn btn-primary btn-sm mx-0" onClick={this.saveCommentButton}>Save</button>
        </div>
        <div className="collapse-footer"  id={`saveStatus${this.props.id}`}>
        </div>
        {/* </form> */}
      </div>
    </div>
    
    {/* show comments */}
    {
      this.state.allComment.length > 0 ?
      ( 
        <div>
          <button type="button" className="btn btn-primary btn-sm mx-0" data-toggle="collapse" data-target={`#comments${this.props.id}`} data-whatever="@mdo">Show Comments ( {this.state.allComment.length} )</button>
          <ShowComments id={this.props.id} data={this.state.allComment}/>
        </div>
      ) : (
        <div></div>
      )
    }
    <button type="button" className="btn btn-primary btn-sm" onClick={() => this.handleLikeButton(this.props.id)}><i class="fas fa-thumbs-up">({this.state.numlike})</i></button> 
  {/* <div className="deleteBtn-container"> */}
    {/* <li className="list-group-item">
      <h4>
      <span>
        <ul>
            <li>{this.newSave}</li>  */}
            {/* <li>{this.props.findRestaurantByID.cuisines}</li>
            <li>{this.props.findRestaurantByID.location.address}</li>
          <li className="btn-group pull-right">
            <img href={this.props.data.thumb} target="_blank" />
          </li> */}
          {/* </ul> */}
     {/* </span> */}
          
     {/* <div className="collapse" id={`${this.props.id}`} tabIndex="-1" role="dialog">

      <div className="collapse-content">
      
        <div className="collapse-header">
          <h5 className="collapse-title">Add Comment Here...</h5>
          <button type="button" className="close" data-dismiss="collapse" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="collapse-body">
          <textarea className ="form-control" name="comment" value={this.state.comment} onChange={this.handInputChange}/>
        </div>
        <div className="collapse-footer">

          <button className="btn btn-primary" onClick={this.saveCommentButton}>Save Comment</button>
        </div>
       
      </div>

      </div>
         
          <button className="btn btn-primary" onClick={() => this.handleDeleteButton(this.props.id)}>Delete</button> */}
      
      {/* </h4>   */}
    {/* </li> */}

  {/* collapse for add comment */}



  </div>
  )}
}
export default Saved;
