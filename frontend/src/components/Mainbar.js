import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../styles/Mainbar.css'
import { Carousel, Button, Modal, Form } from 'react-bootstrap';


const Mainbar = (props) => {

    const [products, setProducts] = useState([]);
    const [showMe, setShowMe] = useState(false);
    const [itemDetail, setItemDetail] = useState({});
    const [itemPhoto, setItemPhoto] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [userName, setUserName]=useState("")
    const [userLastName, setUserLastName]=useState("")
    const [userNumber, setUserNumber]=useState(123456789)
    const [userEmail, setUserEmail]=useState("")

    useEffect(() => {
        axios
            .get(`http://localhost:8000/items/${props.category}?_name=${props.search}&min=${props.minPrice}&max=${props.maxPrice}`)
            .then((res) => {
                console.log(res);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [props.search, props.minPrice, props.maxPrice])

    useEffect(() => {
        axios
            .get(`http://localhost:8000/items/${0}`)
            .then((res) => {
                console.log(res);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/items/${props.category}`)
            .then((res) => {
                console.log(res);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [props.category])

    useEffect(() => {
        axios
            .get(`http://localhost:8000/photo/${itemDetail.p_id}`)
            .then((res) => {
                console.log(res);
                setItemPhoto(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [itemDetail])

    const handlePayClick = () => {  
          axios
          .post('http://localhost:8000/payment', {
            firstname: userName,
            lastname: userLastName,
            email: userEmail,
            phone: userNumber,
            cost: (itemDetail.price*100)
          }
          )
          .then(function (response) {
            console.log(response);
            window.open(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    
          setUserName("");
          setUserLastName("");
          setUserEmail("");
          setUserNumber("");
        }

    return (
        <div className='bg-dark'>
            <div className='item-container bg-dark'>
                {!showMe &&
                    products.map((product) => (
                        <div className='card' key={product.p_id}>
                            <img className='img-fix' src={product.preview} />
                            <h4>{product.name}</h4>
                            <h5>Cena: {product.price}zł</h5>
                            <div>
                                <button className="btn btn-outline-success" onClick={() => { setShowMe(true); setItemDetail(product); }}>Podgląd</button>
                            </div>
                        </div>
                    ))}

            </div>
            {showMe &&
                <div className='bg-dark'>
                    {
                        <Carousel>
                            {
                                itemPhoto.map((photo) => {
                                    return (
                                        <Carousel.Item interval={3000} key={photo.ph_id}>
                                            <img className='d-block w-10 poprawka-karuzeli' height={500} src={photo.photo_base64} alt="PHOTO" />
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    }
                    <div className='bg-dark opis'>
                        {
                            itemDetail.atributes
                        }
                    </div>
                    <div className='bg-dark'>
                        <button className="btn btn-outline-success odstep" onClick={() => setShowMe(false)}>Wstecz</button>
                        <button className="btn btn-outline-success odstep" onClick={handleShow}>KUP TERAZ</button>
                    </div>
                    <div>
                        {
                            <>
                                <Modal size="lg" show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>
                                            {
                                                <img className='modal-img-fix' src={itemDetail.preview} />

                                            };
                                            {
                                                itemDetail.name
                                            }
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Imię</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Imię"
                                                    autoFocus
                                                    value={userName} 
                                                    onInput={e => setUserName(e.target.value)}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                            <Form.Label>Nazwisko</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Nazwisko"
                                                    autoFocus
                                                    value={userLastName} 
                                                    onInput={e => setUserLastName(e.target.value)}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                                <Form.Label>Address email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="imie.nazwisko@przyklad.pl"
                                                    autoFocus
                                                    value={userEmail} 
                                                    onInput={e => setUserEmail(e.target.value)}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                                <Form.Label>Numer telefonu</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="123456789"
                                                    autoFocus
                                                    value={userNumber} 
                                                    onInput={e => setUserNumber(e.target.value)}
                                                />
                                            </Form.Group>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <h2>Do zapłaty: {itemDetail.price} zł</h2>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Anuluj zakup
                                        </Button>
                                        <Button variant="primary" onClick={() => {handlePayClick()}}>
                                            Przejdź do zapłaty
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>
                        }
                    </div>
                </div>
            }
            {

            }
        </div>

    );
};

export default Mainbar;