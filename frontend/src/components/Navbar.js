import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-text navbar-expand-lg navbar-dark bg-dark test-xd">
            <a className="navbar-brand" href="#">
                <img src='https://as2.ftcdn.net/v2/jpg/04/49/64/27/1000_F_449642776_ZJA25d1aUbGDqGjneBJ8Cx4CTHGEGtdn.jpg' width="30" height="30" class="d-inline-block align-top" alt="" />
                CH33MS
                </a>

            <div className="collapse navbar-collapse test-xd" id="navbarSupportedContent">
                    <div className='navbar-category navbar-nav'>
                            <p className="nav-link" href='#'>Dyski SSD i HDD</p>
                            <a className="nav-link" href="#">Karty graficzne</a>
                            <a className="nav-link" href="#">Procesory</a>
                            <a className="nav-link" href="#">Płyty główne</a>
                            <a className="nav-link" href="#">Obudowy</a>
                            <a className="nav-link" href="#">Pamięć RAM</a>
                            <a className="nav-link" href="#">Zasilacze</a>
                            <a className="nav-link" href="#">Chłodzenie</a>
                            <a className="nav-link" href="#">Karty sieciowe</a>
                            <a className="nav-link" href="#">Modding PC</a>
                    </div>
                    <div className = 'input-fix'>
                            <input className="form-group mr-sm-2" type="search" placeholder='Wyszukaj' />
                            <input className="form-group col-md-2" type="cenaMin" placeholder='Cena OD' />
                            <input className="form-group col-md-2" type="cenaMax" placeholder='Cena DO' />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </div>
                    <div>    
                            <button className="btn btn-outline-success test-xd" type="koszyk">Koszyk</button>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar