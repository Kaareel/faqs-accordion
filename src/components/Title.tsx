import { IconStar } from "./Icon";

interface Props {
    title: string
}

function Title ( props: Props ) {
    return <h1 className="text-titleColor md:text-[55px] flex items-center title"><IconStar/>{props.title}</h1>
}

export default Title;