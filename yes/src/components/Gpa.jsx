import React, { Component } from "react";

class Gpa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gpa1: 0,
      gpa2: 0,
      gpa3: 0,
      gpa4: 0,
      gpa5: 0,
      gpa6: 0,
      w1: false,
      w2: false,
      w3: false,
      w4: false,
      w5: false,
      w6: false
    }
  }



  handleUpdate = (event) => {
    var target = event.target;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    var name = target.name;

    this.setState({[name]: value})
  }



  GpaWeighted() {
    var nums = [this.state.gpa1, this.state.gpa2, this.state.gpa3, this.state.gpa4, this.state.gpa5, this.state.gpa6];
    var weighted = [this.state.w1, this.state.w2, this.state.w3, this.state.w4, this.state.w5, this.state.w6];
    var gpa = 0;
    for (var number in nums) {
      nums[number] = Number(nums[number]);
      if (weighted[number]) {
        nums[number]++;
      }
      gpa += nums[number];
      console.log(gpa)
    }
    gpa /= 6;
    return gpa;
  }
  
  GpaUnweighted() {
    var nums = [this.state.gpa1, this.state.gpa2, this.state.gpa3, this.state.gpa4, this.state.gpa5, this.state.gpa6];
    var gpa = 0;
    
    for (var number in nums) {
      nums[number] = Number(nums[number]);
      gpa += nums[number];
    }
    gpa /= 6;
    return gpa;
  } 

  render() {
    return (
      <div id="all">
        <h3>Uncle Gumdrop, please accept my humble gift</h3>
        <form>
          
          <label>
            GPA 1: &nbsp;
            <input type="number" value={this.state.gpa1} name="gpa1" min="0" max="5" onChange={this.handleUpdate}/>
            <input type="checkbox" checked={this.state.w1} name="w1" onChange={this.handleUpdate}/>
            <text>weighted</text>
          </label>

          <br></br>

          <label>
            GPA 2: &nbsp;
            <input type="number" value={this.state.gpa2} name="gpa2" min="0" max="5" onChange={this.handleUpdate}/>
            <input type="checkbox" checked={this.state.w2} name="w2" onChange={this.handleUpdate}/>
            <text>weighted</text>
          </label>

          <br></br>

          <label>
            GPA 3: &nbsp;
            <input type="number" value={this.state.gpa3} name="gpa3" min="0" max="5" onChange={this.handleUpdate}/>
            <input type="checkbox" checked={this.state.w3} name="w3" onChange={this.handleUpdate}/>
            <text>weighted</text>
          </label>

          <br></br>

          <label>
            GPA 4: &nbsp;
            <input type="number" value={this.state.gpa4} name="gpa4" min="0" max="5" onChange={this.handleUpdate}/>
            <input type="checkbox" checked={this.state.w4} name="w4" onChange={this.handleUpdate}/>
            <text>weighted</text>
          </label>

          <br></br>

          <label>
            GPA 5: &nbsp;
            <input type="number" value={this.state.gpa5} name="gpa5" min="0" max="5" onChange={this.handleUpdate}/>
            <input type="checkbox" checked={this.state.w5} name="w5" onChange={this.handleUpdate}/>
            <text>weighted</text>
          </label>

          <br></br>

          <label>
            GPA 6: &nbsp;
            <input type="number" value={this.state.gpa6} name="gpa6" min="0" max="5" onChange={this.handleUpdate}/>
            <input type="checkbox" checked={this.state.w6} name="w6" onChange={this.handleUpdate}/>
            <text>weighted</text>
          </label>
        </form>

        <br></br>
        <p>Your weighted GPA is {this.GpaWeighted()}</p>
        <p>Your unweighted GPA is {this.GpaUnweighted()}</p>
      </div>
    );
  }
}

export default Gpa;
