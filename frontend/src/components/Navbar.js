import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../styles/Navbar.css'

function Navbar(props) {

    const [look, setLook] = useState("");
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(5000);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark test-xd">
            <a className="navbar-brand przycisk"  onClick={()=>{props.setCategory(0)}}>
                <img src='https://as2.ftcdn.net/v2/jpg/04/49/64/27/1000_F_449642776_ZJA25d1aUbGDqGjneBJ8Cx4CTHGEGtdn.jpg' width="30" height="30" className="d-inline-block align-top" alt="" />
                CH33MS
            </a>

            <div className="navbar-collapse test-xd" id="navbarSupportedContent">
                <div className='navbar-category navbar-collapse navbar-nav'>
                    <a className="nav-link btn-outline-success przycisk" onClick={()=>{props.setCategory(1)}}>Dyski SSD i HDD</a>
                    <a className="nav-link btn-outline-success przycisk" onClick={()=>{props.setCategory(2)}}>Karty graficzne</a>
                    <a className="nav-link btn-outline-success przycisk" onClick={()=>{props.setCategory(3)}}>Procesory</a>
                    <a className="nav-link btn-outline-success przycisk" onClick={()=>{props.setCategory(4)}}>Płyty główne</a>
                    <a className="nav-link btn-outline-success przycisk" onClick={()=>{props.setCategory(5)}}>Obudowy</a>
                    <a className="nav-link btn-outline-success przycisk" onClick={()=>{props.setCategory(6)}}>Pamięć RAM</a>
                    <a className="nav-link btn-outline-success przycisk" onClick={()=>{props.setCategory(7)}}>Zasilacze</a>
                    <a className="nav-link btn-outline-success przycisk" onClick={()=>{props.setCategory(8)}}>Chłodzenie</a>
                    <a className="nav-link btn-outline-success przycisk" onClick={()=>{props.setCategory(9)}}>Karty sieciowe</a>
                    <a className="nav-link btn-outline-success przycisk" onClick={()=>{props.setCategory(10)}}>Modding PC</a>
                </div>
                <div className='input-fix '>
                    <input className="form-group mr-sm-2" type="text" placeholder='Wyszukaj' value={look} onInput={e => setLook(e.target.value)}/>
                    <input className="form-group col-md-2" type="number" placeholder='Cena OD' value={min} onInput={e => setMin(e.target.value)}/>
                    <input className="form-group col-md-2" type="number" placeholder='Cena DO' value={max} onInput={e => setMax(e.target.value)}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={()=>{props.setSearch(look); props.setMinPrice(min); props.setMaxPrice(max)}}>Search</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar