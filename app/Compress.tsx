

export default function Compress(props: {onClick: (event: React.MouseEvent<HTMLButtonElement>) => void}) {
    return (
        <div className="compress-btn items-center p-500px">
            <button className="btn-text " onClick={props.onClick}>Compress</button>
        </div>
    )
}