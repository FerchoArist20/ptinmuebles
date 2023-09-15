import { Card } from "semantic-ui-react";
import { Inmueble } from "src/interfaces/Inmuebles";
//import {  } from "module";

interface Props{
    inmuebles: Inmueble[];
}

function InmuebleList({inmuebles}:Props){

    return <Card.Group itemsPerRow={4}>
        {inmuebles.map((inmueble)=>(
            <Card key={inmueble.id}>
                <Card.Content>
                    <Card.Header>{inmueble.nombre}</Card.Header>
                    <Card.Header>{inmueble.direccion}</Card.Header>
                    <Card.Header>{inmueble.precio}</Card.Header>
                </Card.Content>
            </Card>
        ))}
    </Card.Group>

}

export default InmuebleList;




















