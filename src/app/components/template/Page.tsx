import Menu from "./Menu";

export interface PageProps {
    children: any;
}

export default function Page(props:PageProps){
    return <div className="flex">
        <Menu/>
        <main className="p-7">{props.children}</main>
        </div>
}