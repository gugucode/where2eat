import React from "react";
import { DisplayResults } from "./restDisplay";
import API from "../../utils/API";
import { TweenMax, TimelineMax, CSSPlugin, AttrPlugin, Elastic, Power4, Power1 }  from "gsap/all";

import ShowResult from "./showResult";
import "./restStyle.css";

const plugins = [ CSSPlugin, AttrPlugin];

class DisplaySearch extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        zipCode: "78660",
        cuisine: "bbq",
        changeArray: [],
        originRestArray: [],
        rest1: null,
        rest2: null,
        restPickNum: {},
        progress: 0,
        chose: null
      };
  }

  flipAnimation = (el) =>{
      var tl = new TimelineMax()
      tl.to(el, 0.025, {rotationY:180, transformOrigin: "50% 50%", opacity:0, scale:0.5, ease:Power1.easeOut})
      .to(el, 0.25, {rotationY:0, transformOrigin: "50% 50%", opacity:1, scale:1, ease:Power1.easeOut}, "=+0.1")
  }

  componentDidMount = () => {
    console.log(this.props)
    const cuisine = this.props.cuisine;
    const zipCode = this.props.zipCode;

    API.getRestaurant(cuisine,zipCode)
    .then(res => {
      console.log(res);
    
      this.setState({ 
        changeArray: res.data,
        originRestArray: Array.of(...res.data),
      }, () => {
        this.setRest("rest1");
        this.setRest("rest2");
      }
    )})
  }

  setRest = (rest) => {
    this.setState((previousState, currentProps)=>{
      
      const index = Math.floor(Math.random()* this.state.changeArray.length)
      console.log(index)
      const t = this.state.changeArray[index].restaurant;
      let changeArray = previousState.changeArray;
      changeArray.splice(index,1);

      return {
        [rest]: t,
        // restPickNum: restPickNum,
        changeArray: changeArray,
        progress: (1 - (changeArray.length / previousState.originRestArray.length)) * 100
      }
    })
  }

  // When save restaurant button is clicked, get new restaurant 
  handlePick = (id) => {
    
    // Save number of pick for each restaurant
    this.setState((previousState, currentProps)=>{
      let restPickNum = previousState.restPickNum;
      restPickNum[id] = restPickNum[id] ? restPickNum[id] + 1: 1;

      return {
        restPickNum: restPickNum,
      }
    });

    if(this.state.changeArray.length > 0){
      if(id === this.state.rest1.id)
      {
        this.flipAnimation("#rest2")
        this.setRest("rest2")

       }else{
        this.flipAnimation("#rest1")
        this.setRest("rest1")
       }
    }else{
      if(id === this.state.rest1.id)
      {
        this.setState({
          chose: this.state.rest1
        })
      }else{
        this.setState({
          chose: this.state.rest2
        })
      }
    }
  }
  handleLike = (event) =>{
    console.log("HERE", event)
    const likeDiv= event.target;
    event.target.firstChild.classList.remove('far');
    event.target.firstChild.classList.add('fas');
  }

loader = {
    border: "16px solid #f3f3f3",
    borderRadius: "50%",
    borderTop: "16px solid #3498db",
    width: "120px",
    height: "120px",
    animation: "spin 2s linear infinite"
  }

  render() {
      return(
        
          this.state.changeArray.length > -1 && this.state.chose === null ? 
          (
            <div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: `${this.state.progress}%`}}></div>
              </div>
              <div className="row justify-content-center" id="result">
                { this.state.rest1 !== null ? <DisplayResults divID="rest1" pickRest={this.handlePick} data={this.state.rest1} handleLike={this.handleLike} /> : ("") }
                { this.state.rest2 !== null ? <DisplayResults divID="rest2" pickRest={this.handlePick} data={this.state.rest2} handleLike={this.handleLike}/> : ("") }
              </div>
            </div>
          ) : (
            this.state.chose !== null ? 
            (
              <ShowResult chose={this.state.chose} others={this.state.originRestArray} vote={this.state.restPickNum}/> 
            ): (
              <div className="row justify-content-center">
                <div className="loader m-5"></div>
              </div>
            )
          )

      )

  }
}

export default DisplaySearch;