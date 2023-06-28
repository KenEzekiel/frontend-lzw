

export default function CompressRLE(props: {onClick: (event: React.MouseEvent<HTMLButtonElement>) => void}) {
    return (
        <div className="compress-btn items-center p-500px">
            <button className="btn-text " onClick={props.onClick}>CompressRLE</button>
        </div>
    )
}