import { Card } from "semantic-ui-react";
import { Inmueble } from "src/interfaces/Inmuebles";
import { useRouter } from "next/router";
//import {  } from "module";

interface Props{
    inmuebles: Inmueble[];
}

function InmuebleList({inmuebles}:Props){
    const router = useRouter()

    return <Card.Group itemsPerRow={4}>
        {inmuebles.map((inmueble)=>(
            <Card 
            key={inmueble.id} 
            onClick={()=> router.push(`/inmuebles/edit/${inmueble.id}`)}>
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




















