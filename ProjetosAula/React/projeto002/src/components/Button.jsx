import "./styles/Button.css";
function Button(props) {
  return (
  <article className="article">
  <button className={props.class}>{props.text}</button>
  </article>
  )
}
export default Button;