import PageBody from "./PageBody";
import Menu from "./Menu";

export default function Page({children}){
    return(
        <>
        <Menu/>
        <PageBody className="mt-10">{children}</PageBody>
        </>
    )
}