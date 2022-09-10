import styled from "styled-components";
import Container from "../styles/utils";
import Link from "next/link";
import Image from "next/image";


interface Product {
    name:string
}

interface ProductsProps {
    products:any[];
}

const Products = ({products}:ProductsProps) => {
    console.log(products)
    return(
        <ProductContainer>
            <Title><span>Des</span>taques</Title>
            <ProductsList >
                {products && products.map((product)=> {
                    return (
                    <ProductItem key={product._id} >
                    <Link href={'/'}>
                        <a >
                            {/* <Image src='' width={230} height={230} alt="Product image"/> */}
                            <ProductName> 
                                Nome
                            </ProductName>
                            <ProductPrice>
                                Preço
                            </ProductPrice>
                            <ProductSplitPrice>
                                Preço Parcelado
                            </ProductSplitPrice>
                        </a>
                    </Link>
                </ProductItem >)
                })}
            </ProductsList>
        </ProductContainer>
        
    )
}

const ProductContainer = styled.section `
    ${Container}
`;

const Title = styled.p `
    font-size: 1.875rem;
    font-weight:700;
    margin-top:3.125rem;
    margin-bottom: 2.0rem;
    span{
        text-decoration: underline ${({theme}) => theme.colors.primary};
    }
`;

const ProductsList = styled.div `
    display:grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1.875rem;
    margin-bottom: 11.125rem;
`
const ProductItem = styled.div `
    border: 1px solid #eaeaea;
    height: 23.125rem;
    border-radius: 4px;
    box-shadow: 5px 0px 10px #d9d9d9;
    padding: 1rem;
    cursor:pointer;
    a{
        text-decoration:none;
        color: black;

    }

    &:hover{
        box-shadow:5px 10px 10px #d9d9d9;

        p{
            color:${({theme})=> theme.colors.primary}
        }
    }
`

const ProductName = styled.p `
    font-size:0.875rem;
`
const ProductPrice = styled.p `
    font-size:1.125rem;
    font-weight:700;
`
const ProductSplitPrice = styled.small`
    font-size: 0.75rem;
    font-weight:700;
    color: #9999;
`

export default Products;