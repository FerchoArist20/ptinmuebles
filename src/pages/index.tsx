import { Inmueble } from "src/interfaces/Inmuebles";
import { Button, Grid } from "semantic-ui-react";
import { useRouter } from "next/router";
import InmuebleList from "../components/inmuebles/InmuebleList";
import Layout from "src/components/Layout";

interface Props {
  inmuebles: Inmueble[];
}


export default function index({ inmuebles }: Props) {

  const router = useRouter()

  return <Layout>
    {inmuebles.length === 0 ?
      <Grid
        columns={3}
        centered
        verticalAlign="middle"
        style={{ height: '70%' }}>
        <Grid.Row>
          <Grid.Column>
            <h1>no hay inmuebles por ahora</h1>
            <button onClick={() => router.push("/inmuebles/new")}>Creae un nuevo inmueble</button>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      : <InmuebleList inmuebles={inmuebles} />
    }</Layout>
}

export const getServerSideProps = async () => {

  const res = await fetch('http://localhost:3000/api/inmueblesdb');
  const inmuebles = await res.json();

  return {
    props: {
      inmuebles: inmuebles,
    },
  };
};