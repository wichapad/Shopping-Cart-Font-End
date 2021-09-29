// ส่วนเว็บ product
import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../component/Announcement"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import Newletter from "../component/Newletter"
import fogfont from "../imges/fog(font).png"
import { mobile } from "../responsive"

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding:"10px" , flexDirection:"column"})}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding:"10px"})}
`
const Title = styled.h1`
    font-weight: 200;

`
const Desc = styled.p`
    font-size: 30px;
    margin: 20px 0px;
`
const Price = styled.span`
    font-size: 25px;
`

const FilterContainer= styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width:"100%"})}
`
const Filter= styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle= styled.span`
    font-size: 20px;
    font-weight: 200;
    
`
const FliterColor= styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid black;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilerSize= styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilerSizeOpition= styled.option`

`
const AddContainer= styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width:"100%"})}
`
const AmountContainer= styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount= styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button= styled.button`
    padding: 15px;
    border: 2px solid gray;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: lightgray;
    }
`

const Product = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src={(fogfont)}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>FACE OF FEAR</Title>
                    <Desc>Forgivense Of God</Desc>
                    <Price>฿ 500</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FliterColor color="black"/>
                            <FliterColor color="white"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilerSize>
                            <FilerSizeOpition>S</FilerSizeOpition>
                            <FilerSizeOpition>M</FilerSizeOpition>
                            <FilerSizeOpition>L</FilerSizeOpition>
                            <FilerSizeOpition>XL</FilerSizeOpition>
                            <FilerSizeOpition>2XL</FilerSizeOpition>
                            </FilerSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newletter/>
            <Footer/>
        </Container>
    )
}

export default Product
