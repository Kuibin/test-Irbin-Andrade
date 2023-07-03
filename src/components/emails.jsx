import {useQuery} from '@tanstack/react-query'
import { getEmails } from '../api/emailsApi'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Emails(){
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Entrando vamos a llamar peticiones
    const {isLoading, data:emailRes, isError, error} = useQuery({
        queryKey: ['emails'], //aqui guarda en memoria cache
        queryFn: getEmails
    })

    if (isLoading) return <div>Loading...</div>
    else if (isError) return <div>Error: {error.message}</div>

    return emailRes.map(emailRes => (
        <>
        <div key={emailRes.id} onClick={handleShow}>
        <div className="col-12">
        <div className="card border-white mt-2">
        <div className="card-header ">
                <img src={emailRes.avatar} alt="User Avatar" className="avatar" />
                <span className="mx-2">{emailRes.from}</span>
            </div>
            <small>{emailRes.date}</small>
            <div className="card-body text-dark">
                {emailRes.subject }
            </div>
        </div>
        </div>
        </div>
        <Offcanvas key={emailRes.id} show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{emailRes.subject }</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {emailRes.body }
        </Offcanvas.Body>
      </Offcanvas>
    </>
    ))
}


export default Emails