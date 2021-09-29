import styled from "styled-components"
import { categories } from "../pages/data"
import { mobile } from "../responsive"
import CategorytItem from "./CategorytItem"


const Container= styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({padding:"50px", flexDirection:"column"})}
`

const Categories = () => {
    return (
        <Container>
            {categories.map(item=>(
                <CategorytItem item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Categories
