import { StaticImageData } from "next/image";
import styled from "styled-components";
import Container from "../styles/utils";
import Image from "next/image";


interface BannerProps {
    image: StaticImageData;
    width: number;
    heigth: number;
}


const Banner = ({image, width, heigth}:BannerProps )=>{

    return (
        <BannerContainer>
            <Image src={image} width={width} height={heigth}/>
        </BannerContainer>
    )
}
const BannerContainer= styled.section`
${Container};
border-top: 3px solid ${({theme})=> theme.colors.primary};
border-bottom: 3px solid ${({theme})=> theme.colors.primary}
`;

export default Banner;
