import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {deptService} from './services/deptService';



function AjaxDemo3() {

    const [deptsArray, setDeptsArray] = useState([]);


    function getData() {

        // direct call to server (wihtout data service)

        /*
        let url = "http://localhost:3002/Depts";
        axios.get(url).then(resData => {           
            setDeptsArray(resData.data);
        });
        */

        // making server calls with data service
        deptService.getAllDepts().then(resData => {           
            setDeptsArray(resData.data);
        });

    }


    var result = deptsArray.map((item, index) =>
        <tr key={index}>
            <td> {item.Deptno}  </td>
            <td> {item.Dname}  </td>
            <td> {item.Loc}  </td>
        </tr>);


    return (
        <>
            <h3>CRUD Operations using  MERN Stack</h3>
            <hr />

            <input type="button" value="Get Data" onClick={getData} />
            <hr />
            <table border="2" width="700">
                <thead>
                    <tr>
                        <th>Dept Number</th>
                        <th>Dept Name</th>
                        <th>Dept Location</th>
                    </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>
            </table>

        </>
    );

}

export default AjaxDemo3;
