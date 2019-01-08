import React,{Component} from 'react';
import { connect } from 'react-redux'
import {Button} from "reactstrap";

const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive',
}
  

  
// let UserList = ({ data }) => (
//   data ?
  
//     <data style={articleStyle} >
//       <div>
      
      
//        <h1>{data.Name}</h1>

       
       
//       </div>
//     </data> :
//     null
// );

class UserList  extends Component {
  render() {
    console.log("Articale",this.props.data)
    return (
     
      <div>
      
            <table class="table table-hover" border="2" align="center" >
           
            
            <tr>
            
              <th>Name</th>
              <th>Address</th>
              <th>Mobile No</th>
              <th>Email</th>
              <th>2FA</th>
              <th>Status</th>
             

            </tr>
            
            
        {this.props.data &&
        this.props.data.map((details,index) => {
          return [
              <tr>
             <td key={index}> {details.Name}</td>
             <td key={index}> {details.Address}</td>
             <td key={index}> {details.Mobile_No}</td>
             <td key={index}> {details.Email}</td>
            {/* {details.FA === "True" ? 
              <Button color="primary">
                  Enable
              </Button>
              :
              <Button color="success">
                {"Disable"}
              </Button>
            } */}
<td>
{details.FA== "True" ? (<font color="Green"><td>Enable</td></font>) : (<font color="Red"><td>Disable</td></font>)}</td>
             {/* <td key={index}>  */}
             <td>
             {details.Status== "Active" ? (<font color="Green"><td>{details.Status}</td></font>) : (<font color="Red"><td>{details.Status}</td></font>)}</td>
             </tr>
             
            
            
          ]
        })}
        </table>
      </div>
      
    )
  }
}


const mapStateToProps = (state) => ({
  data: state.news,
})

UserList = connect(
  mapStateToProps,
  null
)(UserList)

export default UserList;


