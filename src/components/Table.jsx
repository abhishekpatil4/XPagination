import "./table.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

export const Table = () => {
    const [data, setData] = useState();
    let { page } = useParams();
    const [pageNum, setPageNum] = useState(Number(page));
    const navigate = useNavigate();
    const handleNext = () => {
        if (pageNum < 5) {
            navigate(`/${pageNum + 1}`)
            setPageNum((prev) => prev + 1);
        } else {
            alert("You're already at last page");
        }
    }
    const handlePrev = () => {
        if (pageNum > 1) {
            setPageNum((prev) => prev - 1);
            navigate(`/${pageNum - 1}`)
        } else {
            alert("You're already at first page");
        }
    }
    useEffect(() => {
        const getData = async () => {
            try {
                const API_URL = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
                let res = await axios.get(API_URL);
                let pgNo = (pageNum-1) * 10;
                setData(res.data.slice(pgNo, pgNo + 10));
            } catch (e) {
                console.log(e.response.status);
                alert("failed to fetch data");
            }
        }
        getData();
    }, [pageNum])
    return <>
        <table style={{ backgroundColor: '#009879', margin: '0px 40px' }}>
            <thead align="left" style={{ backgroundColor: '#009879', color: 'white' }}>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Role</td>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map((d, idx) =>
                        <tr style={{ backgroundColor: 'white' }} key={idx}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>{d.role}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button className="pagination-element" onClick={handlePrev}>Previous</button>
            <div className="pagination-element">{pageNum}</div>
            <button className="pagination-element" onClick={handleNext}>Next</button>
        </div>
    </>
}