interface Props{
    callback?: () => void;
    className?: string;
    children: string;
}

const Button = ({children, callback, className}: Props) => {
    return (
        <div
            onClick={callback ?? (() => {})}
            className={`bg-red border-1 px-3 rounded-md cursor-pointer hover:bg-red-500 hover:text-white hover:border-main ${className ?? ''}`}
        >{children}</div>
    )
}

export default Button;