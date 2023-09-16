import { Button, Card, Form, Grid, GridColumn, Icon, Confirm } from 'semantic-ui-react';
import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Inmueble } from 'src/interfaces/Inmuebles';
import { useRouter } from "next/router";
import Layout from 'src/components/Layout';

export default function newPage() {

    const [inmueble, setInmueble] = useState({
        nombre: "",
        descripcion: "",
        direccion: "",
        precio: "",

    });
    const [openConfirm, setOpenConfirm] = useState(false);
    const router = useRouter();

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

    const loadInmueble = async (id: string) => {
        const res = await fetch('http://localhost:3000/api/inmueblesdb/' + id);
        const inmueble = await res.json();
        setInmueble({ nombre: inmueble.nombre, descripcion: inmueble.descripcion, direccion: inmueble.direccion, precio: inmueble.precio });

    };

    const updateInmueble = async (id: string, inmueble: Inmueble) => {
        await fetch("http://localhost:3000/api/inmueblesdb/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inmueble)
        })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (typeof router.query.id === "string") {
                updateInmueble(router.query.id, inmueble);
            } else {
                await createInmueble(inmueble);
            }
            router.push("/");
        } catch (error) {
            console.log(error);

        }
    };

    const handleDelete = async (id: string) => {
        try {
            await fetch("http://localhost:3000/api/inmueblesdb/" + id, {
                method: "DELETE",
            });
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (typeof router.query.id === 'string') loadInmueble(router.query.id);

    }, [router.query])

    return (
        <Layout>
            <Grid centered columns={3} verticalAlign='middle' style={{ height: '70' }} >
                <GridColumn>
                    <Card>
                        <Card.Content>
                            <Form onSubmit={handleSubmit}>
                                <Form.Field>
                                    <label htmlFor="nombre">Nombre:</label>
                                    <input type="text" placeholder="Escribe el nombre de tu casa" name="nombre" onChange={handleChange} value={inmueble.nombre} />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor="descricion">Descripcion:</label>
                                    <textarea name="descripcion"
                                        rows={2}
                                        placeholder="Describe tu casa"
                                        onChange={handleChange}
                                        value={inmueble.descripcion}
                                    ></textarea>
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor="direccion">Direccion:</label>
                                    <input type="text" placeholder="Escribe la direccion de tu casa" name="direccion" onChange={handleChange} value={inmueble.direccion} />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor="precio">Precio:</label>
                                    <input type="numeric" placeholder="Escribe el valor de tu casa" name="precio" onChange={handleChange} min="1" value={inmueble.precio} />
                                </Form.Field>
                                {
                                    router.query.id ? (
                                        <Button color='teal'>
                                            <Icon name="save" />
                                            Actualizar
                                        </Button>
                                    ) : (
                                        <Button primary>
                                            <Icon name="save" />
                                            Guardar
                                        </Button>
                                    )
                                }
                            </Form>
                        </Card.Content>
                    </Card>
                    {router.query.id  && (
                        <Button color='red' onClick={() => setOpenConfirm(true)}>
                            delete
                        </Button>
                    )}
                </GridColumn>
            </Grid>
            <Confirm
                header='Eliminar un inmueble'
                content={`¿Esta seguro de eliminar el inmueble ${router.query.id}?`}
                open={openConfirm}
                onCancel={() => setOpenConfirm(false)}
                onConfirm={() => typeof router.query.id === "string" && handleDelete(router.query.id)}
            />
        </Layout>
    );
}