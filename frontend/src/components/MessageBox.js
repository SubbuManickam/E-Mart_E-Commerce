import Alert from "react-bootstrap/Alert";

//Show alert to user on success and failure
export default function MessageBox(props) {
    return (<Alert variant={props.variant || 'info'}>{props.children}</Alert>)
}