import React from "react";
import { DisplayResults } from "./restDisplay";
import { ShowRestList } from "../showRest/showRestList/showRestList";
import API from "../../utils/API";
import DeleteRest from "./savedRestaurant";
import { RestSearch } from "./restSearch";


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
        restPickNum: {}
      };
  }

  componentDidMount = () => {
    console.log(this.props)
    const { cuisine, zipCode } = this.props;

    API.getRestaurant({
      cuisine: cuisine,
      zipCode: zipCode
    })
    .then(res => {
      console.log(res);
    
      this.setState({ 
        changeArray: res.data,
        originRestArray: res.data,
      }, () => {
        console.log(this.state.changeArray.length)
        // console.log(this.state.rest1)
        // console.log(this.state.rest2)
        this.setState({
          rest1: this.getRamdRest(),
          rest2: this.getRamdRest()
        })
      }
    )})
  }

  getRamdRest = () => {
    console.log(this.state.changeArray.length)
    const index = Math.floor(Math.random()* this.state.changeArray.length)
    const t = this.state.changeArray.splice(index,1)
    console.log(t)
    return t[0].restaurant;
  }

  setRest = (rest,id) => {
    this.setState((previousState, currentProps)=>{
      let restPickNum = previousState.restPickNum;
      restPickNum[id] = restPickNum[id] ? restPickNum[id] + 1: 1;
      
      return {
        [rest]: this.getRamdRest(),
        restPickNum: restPickNum
      }
    })
  }

  // When save restaurant button is clicked, add restaurant to db
  handlePick = (id) => {
    console.log(id);
    console.log(this.state.restPickNum);

    if(this.state.changeArray.length > 0){
      id === this.state.rest1.id ?
      (
        this.setRest("rest2",id)
      ) : (
        this.setRest("rest1",id)
      )
    }
  }


  render() {
      return(
          <div className="row justify-content-center" id="result">
            { this.state.rest1 !== null ? <DisplayResults pickRest={this.handlePick} data={this.state.rest1} /> : ("") }
            { this.state.rest2 !== null ? <DisplayResults pickRest={this.handlePick} data={this.state.rest2} /> : ("") }
          </div>
      )

  }
}

export default DisplaySearch;