import { useState } from 'react'
import { Table } from './components/Table'
// import './App.css'

function App() {
  return <>
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
      <h1 style={{textAlign:'center'}}>Employee Data Table</h1>
      <Table />
    </div>
  </>
}

export default App
