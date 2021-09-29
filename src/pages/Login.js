//แสดงหน้า ล๊อคอิน
import styled from "styled-components"
import Announcement from "../component/Announcement"
import Navbar from "../component/Navbar"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:url("https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.6435-9/77001641_2773124359397379_5684900622306902016_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeGJ8uIeP21nERt0vbqlohZtMfdogmxzQsYx92iCbHNCxsICQOjfZl7MI4ltRL5uPR5e5P7IPtvuUS4PNmu6yp2O&_nc_ohc=EJutG0kDuioAX-L1MDQ&_nc_ht=scontent.fbkk13-2.fna&oh=2406ae8eccfb7ba6d864dc0d75d0f06c&oe=61762BB4")center;
    display: flex;
    background-size: cover;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    ${mobile({width:"75%"})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: lightgray;
    cursor: pointer;
    font-weight: 300;
    margin-bottom: 10px;
`

const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;

    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Container> 
                <Wrapper>
                    <Title>SIGN IN</Title>
                    <Form>
                        <Input placeholder="name" />
                        <Input placeholder="password" />
                        <Button>LOGIN</Button>
                        <Link>DO NOT TOU REMEMBER THE PASSWORD?</Link>
                        <Link>CREATE A NEW ACCOUNT</Link>
                    </Form>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Login
