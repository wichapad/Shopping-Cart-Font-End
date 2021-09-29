// ประกาศ บน Navbar
import styled from "styled-components"

const Container =styled.div`
    height: 30px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            BAND CLOTHING FROM THAILAND.
        </Container>
    )
}

export default Announcement
