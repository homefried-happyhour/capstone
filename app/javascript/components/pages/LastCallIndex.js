import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function LastCallIndex (props) {
    
    const {cocktails} = props
    return (
        <>         
            <div>LastCallIndex</div>
            {cocktails && cocktails.map((value, index) => {
                return (
                <Card key={index}>
                    <Card.Img top style={{ width: '10rem' }} src={value.image} alt={value.name} />
                    <Card.Body>
                        <Card.Title>{value.name}</Card.Title>
                        <NavLink to={`/lastcallshow/${value.id}`}>
                            <Button> More Info </Button>
                        </NavLink>
                    </Card.Body>
                </Card>
                )
            })
            }
        </>
    )
    
}
