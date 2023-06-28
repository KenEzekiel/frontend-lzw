

export default function Decompress(props: {onClick: (event: React.MouseEvent<HTMLButtonElement>) => void}) {
    return (
        <div className="decompress-btn items-center p-500px">
            <button className="btn-text " onClick={props.onClick}>DecompressRLE</button>
        </div>
    )
}