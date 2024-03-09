import Link from "next/link"

interface Props {
    path: string;
    icon: JSX.Element;
    title: string;
}
export const SidebarItem = ({ icon, path, title }: Props) => {
    return (
        <Link
            href={path}
            className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
            {icon}
            <span className="ml-3 text-xl">{title}</span>
        </Link>
    )
}
