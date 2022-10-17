export default function Error(props) {
    console.log(props)
    return (
        <div className="error-page">
            <h1>Error page</h1>
            {props.error && <p>{props.error}</p>}
        </div>
    )
}