const Url = (props) => {

    return ( <
        div style = {
            {
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }
        } >
        <
        a style = {
            {
                color: "wheat",
                fontSize: "2.5rem",
                cursor: "pointer"
            }
        }
        href = { props.url }
        target = "_blank"
        rel = "noreferrer"
        className = "url" > { props.url } < /a> <
        button style = {
            {
                color: "black",
                background: "#7CFFCB",
                border: "0px",
                borderRadius: "1rem",
                padding: "0.8rem",
                fontSize: "1rem",
                marginLeft: "1rem",
                cursor: "pointer",
            }
        }
        onClick = { props.oncopy } > { props.urlCopied ? "Copied ;)" : "Copy the url" } < /button> <
        /div>
    )
}
export default Url