
import styled from "styled-components";
import Image from "next/image";
import Container from "../styles/utils";
import Logo from "../public/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons"
;
const Footer = () => {
    return (
        <StyledFooter>
            <FooterConteinar>
                <div>
                    <Image src={Logo} width={130} height={60} alt="logo"/>
                </div>
                <Contact>
                    Imagine Shop - +55 (48) 3771 - 1703 3771 - 1823 - imagine@imagineschool.com.br - Rua Miguel Daux, 129 - Coqueiros - Florianópolis/SC
                </Contact>
                <SocialNetworkingList>
                    <li>
                        <SocialNetworkingIcon icon={faFacebookSquare}/>
                    </li>
                    <li>
                        <SocialNetworkingIcon icon={faInstagram}/>
                    </li>
                    <li>
                        <SocialNetworkingIcon icon={faYoutube}/>
                    </li>
                </SocialNetworkingList>
            </FooterConteinar>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer `
    margin-top: 14rem;
    height: 12.5rem;
    background-color:  ${({theme})=>theme.colors.footer};
`;
const FooterConteinar = styled.div`
    ${Container};
    display: grid;
    grid-template-columns: 130px auto 130px;
    height: 12.5rem;
`;

const ImageContainer = styled.div`
    padding-top: 2.5rem;
`;

const Contact = styled.p`
    font-size: 0.75rem;
    color: ${({theme})=> theme.colors.secondary};
    margin:0;
    text-align:center;
    margin-top: 8.125rem;
    

`;

const SocialNetworkingList = styled.ul `
    padding-top: 2.5rem;
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1.5rem; 
`;

const SocialNetworkingIcon = styled(FontAwesomeIcon)`
        color: ${({theme})=> theme.colors.secondary};
        font-size: 1.5rem;
`
export default Footer