import "./table.css"
import { useState, useEffect } from "react"
import axios from "axios"
export const Table = () =>{
    const [data, setData] = useState();
    useEffect(() => {
        const getData = async() => {
            try {
                const API_URL = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
                const res = await axios.get(API_URL);
                setData(res.data);
            } catch (e) {
                console.log(e.response.status);
                alert("Error: Unable to fetch data from API");
            }
        }
        getData();
    },[])
    return<>
    <table style={{width:'100%'}}>
        <thead align="left" style={{backgroundColor:'#009879', color:'white'}}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
        </thead>
        <tbody>
            {
                data && data.map((d) => 
                    <tr>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td>{d.role}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
    </>
}