import axios from 'axios';

const baseUrl = `http://localhost:3002/Depts/`;

export  const deptService = {
    getAllDepts,     
    getDeptById,    
    createDept,
    updateDept,
    deleteDept    
};

// 1. Read All 
function getAllDepts() {
    return  axios.get(baseUrl);
}

// 2. Read Single
function getDeptById(id) {
    return axios.get(baseUrl +  id);
} 

// 3. Create
function createDept(data) {
    return axios.post(baseUrl, data);
}

// 4. Update
function updateDept(data) {    
    return axios.put(baseUrl,data);
}

// 5. Delete
function deleteDept(id) {
    return axios.delete(baseUrl + id);
   // return axios.delete(`${baseUrl}${id}`);
} 