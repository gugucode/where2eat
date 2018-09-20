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
      allComment: []
    }
  }

  componentDidMount = () => {
    this.getAllComments(this.props.id)
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
    

  </div>
  )}
}
export default Saved;
