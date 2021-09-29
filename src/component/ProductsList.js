import styled from "styled-components"
import Navbar from "../component/Navbar"
import { mobile } from "../responsive"
import Announcement from "./Announcement"
import Footer from "./Footer"
import Newletter from "./Newletter"
import Products from "./Products"

const Container=styled.div`

`
const Title=styled.h1`
    margin: 20px;
`
const FilterContainer=styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter=styled.div`
    margin: 20px;
    ${mobile({width:"0px 20px" , display:"flex" , flexDirection:"column"})}
`

const FilterText= styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight:"0px"})}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin:"10px 0"})}
`
const Option = styled.option`
`

const ProductsList = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>T-Shirt</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                            <Option>Black</Option>
                            <Option>White</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                            <Option>2XL</Option>
                    </Select>
                </Filter>
                <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                        <Option selected>
                            Newest
                        </Option>
                            <Option>Price (asc)</Option>
                            <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newletter/>
            <Footer/>
        </Container>
    )
}

export default ProductsList
