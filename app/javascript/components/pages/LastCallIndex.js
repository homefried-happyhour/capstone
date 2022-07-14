import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class LastCallIndex extends Component {
    render() {
        const {cocktails} = this.props
        return (
            <>         
                <div>LastCallIndex</div>
                {cocktails && cocktails.map((value, index) => {
                    return (
                    <Card key={index}>
                        <CardImg top style={{ width: '10rem' }} src={value.image} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Name: {value.name}</CardTitle>
                            <NavLink to={`/lastcallshow/${value.id}`}>
                                <Button> More Info </Button>
                            </NavLink>
                        </CardBody>
                    </Card>
                    )
                })
                }
            </>
        )
    }
}
