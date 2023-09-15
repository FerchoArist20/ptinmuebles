import { Button, Card, Form, Icon } from 'semantic-ui-react';
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Inmueble } from 'src/interfaces/Inmuebles';
import router from "next/router";

export default function newPage() {

    const [inmueble, setInmueble] = useState({
        nombre: "",
        descripcion: "",
        direccion: "",
        precio: "",

    });

    const handleChange = ({
        target: { name, value },
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setInmueble({ ...inmueble, [name]: value });

    const createInmueble = async (inmueblesd: Inmueble) => {
        await fetch('http://localhost:3000/api/inmueblesdb', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inmueblesd)
        })

    }


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await createInmueble(inmueble);
            router.push("/");
        } catch (error) {
            console.log(error);

        }
    };


    return (
        <div>
            <Card>
                <Card.Content>
                    <Form onSubmit={handleSubmit}>
                        <Form.Field>
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" placeholder="Escribe el nombre de tu casa" name="nombre" onChange={handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor="descricion">Descripcion:</label>
                            <textarea name="descripcion"
                                rows={2}
                                placeholder="Describe tu casa"
                                onChange={handleChange}
                            ></textarea>
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor="direccion">Direccion:</label>
                            <input type="text" placeholder="Escribe la direccion de tu casa" name="direccion" onChange={handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor="precio">Precio:</label>
                            <input type="numeric" placeholder="Escribe el valor de tu casa" name="precio" onChange={handleChange} min="1"  />
                        </Form.Field>
                        <Button>
                            <Icon name="save" />
                            Save
                        </Button>
                    </Form>
                </Card.Content>
            </Card>
        </div>
    );
}