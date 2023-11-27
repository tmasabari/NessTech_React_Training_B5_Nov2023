import React, {useState} from 'react';
import { deptService } from './services/deptService';

function AjaxDemo4() {

    let [deptsArray, setDepts] = useState([]);
    const [Deptno, setDeptno] = useState("");
    const [Dname, setDname] = useState("");
    const [Loc, setLoc] = useState("");
    

    function getData()
    {
        deptService.getAllDepts().then( (resData) => {             
            setDepts(resData.data);
        });
    }


    function addDept()
    {
      let deptObj = {};
      deptObj.Deptno = Deptno;
      deptObj.Dname = Dname;
      deptObj.Loc = Loc; 

      // console.log(deptObj);
      deptService.createDept(deptObj).then( (resData) => {          
          alert("New Dept is added to database");
          getData();
      });

      
    }

    function selectDept(dno)
    {
      deptService.getDeptById(dno).then( 
          resData => 
          {
            let deptObj = resData.data;        
            setDeptno(deptObj.Deptno);
            setDname(deptObj.Dname);
            setLoc(deptObj.Loc);
          })
          .catch((error) => {
              alert(error);
              console.log(error);
          });
    }


    function updateDept()
    {
      let deptObj = {};
      deptObj.Deptno = Deptno;
      deptObj.Dname = Dname;
      deptObj.Loc = Loc; 

      deptService.updateDept(deptObj).then( resData => {
        getData();
        alert("Selected Dept are updated to database");
      });  
    }

    function removeDept(dno)
    {
      let confirmDelete  = window.confirm("Are you sure you want to delete?");

      if(confirmDelete == true)
      {
        deptService.deleteDept(dno).then( resData => 
          {
             alert("Selected Dept details are deleted from server...!");
             getData();
          });
      }
    }

    let resultsArray  = deptsArray.map( item =>  
        <tr>
          <td>  {item.Deptno} </td>
          <td>  {item.Dname} </td>
          <td>  {item.Loc} </td>
          <td>
               <a href="javascript:void(0);" onClick={ () => removeDept(item.Deptno)}> Delete </a>  |   
               <a href="javascript:void(0);" onClick={ () => selectDept(item.Deptno)}> Select </a>  |   
          </td>
        </tr>);
         



  return (
      <div>
        <h3>CRUD Operations on JSON Server - using Axios</h3>
        <hr/>
            <input type="text" value={Deptno} placeholder="Deptno"  
            onChange={(event) => setDeptno(event.target.value)}   />

            <input type="text" value={Dname} placeholder="Dname"  
            onChange={(event) => setDname(event.target.value)}   />

            <input type="text" value={Loc} placeholder="Loc"  
            onChange={(event) => setLoc(event.target.value)}   />
            <br/><br/>  

            <input type="button"  onClick={getData} value="Get Depts"  />      
            <input type="button"  onClick={addDept} value="Add Dept"  />
            <input type="button"  onClick={updateDept} value="Update Dept"  />
        <br/><br/>    

        <table border="2"> 
                <tr>
                   <th>Dept Number</th>
                   <th>Dept Name</th>
                   <th>Dept Loc</th>   
                   <th></th>                   
               </tr> 

                {resultsArray}  
            </table> 
    </div>
  );
}

export default AjaxDemo4;
