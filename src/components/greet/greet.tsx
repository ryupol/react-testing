import { GreetProps } from "./greet.types";

function Greet(props: GreetProps) {
  return <div>Hello {props.name ? props.name : "Guest"}</div>;
}

export default Greet;
