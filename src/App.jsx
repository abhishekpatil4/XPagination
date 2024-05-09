import { useState } from 'react'
import { Table } from './components/Table'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import './App.css'

function App() {
  const { page } = useParams();
  const nagivate = useNavigate();
  useEffect(() => {
    if (page == undefined) {
      nagivate("/1");
    }
  }, [])
  return <>
    {page &&
      <>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ textAlign: 'center' }}>Employee Data Table</h1>
          <Table />
        </div>
      </>
    }
  </>
}

export default App
