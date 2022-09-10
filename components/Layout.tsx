import {NextPage} from "next";
import Link from "next/link";
import  Header from "../components/Header";
import Footer from "../components/Footer";


const Layout: NextPage<any> = ({children}:any) =>{
    return (
       <>
       <Header/>
       {children}
       <Footer/>
       </>
  
    )
}

export default Layout;