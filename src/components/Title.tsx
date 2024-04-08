import { IconStar } from "./Icon";

interface Props {
    title: string
}

function Title ( props: Props ) {
    return <h1 className="text-titleColor mb-8 flex items-center"><IconStar/>{props.title}</h1>
}

export default Title;