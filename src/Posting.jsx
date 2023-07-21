export default function Posting(props) {
    return (
        <div style={{ borderRadius: '5px', boxShadow: "grey 0px 0px 5px", padding: "10px", maxWidth: "400px", margin: "10px 0px"}}>
            <div>{props.data.price}</div>
            <img src={props.data.imageURL} alt="" />
            <h3>{props.data.title}</h3>
            <p>{props.data.description}</p>
        </div>
    )
}