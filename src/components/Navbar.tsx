import { Button, Container, Menu } from "semantic-ui-react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function navbar() {
    const router = useRouter()
    return (
        <Menu inverted attached style={{ padding: '0.5rem' }}>
            <Container>
                <Menu.Item onClick={()=> router.push('/')} >
                    <Image
                        src='https://www.ngenespanol.com/wp-content/uploads/2022/09/medellin-la-ciudad-colombiana-de-la-eterna-primavera-1024x573.jpg'
                        width={50}
                        height={60}
                        alt='logo'
                    />
                </Menu.Item>

                <Menu.Menu position="right">
                    <Menu.Item>
                        <Button onClick={() => router.push('/inmuebles/new')}>
                            nuevo inmueble
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    )
}
