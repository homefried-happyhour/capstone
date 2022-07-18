import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function LastCallIndex (props) {
    
    const {cocktails} = props
    let [search, setSearch] = useState(cocktails)

    return (
        <>         
        <Container>
            <Row  xd={1} md={3}>
                {cocktails && cocktails.map((value, index) => {
                    return (
                    <Card id="index-card" key={index}>
                        <Card.Img src={value.image} alt={value.name} />
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
            </Row>
        </Container>
        </>
    )
    
}
