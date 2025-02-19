import "./styles/Button.css";
import { useState } from "react";
function Button(props) {
  const [count, setCount] = useState(0);

  if (count >= 100) {
    return (
      <article className="article">
        <img
          src="https://i.pinimg.com/originals/d1/cb/4f/d1cb4f5cb89d8fcc33840736d89dc2fd.jpg"
          alt="AlfaOne Development"
          className="img"
        />
      </article>
    );
  }

  if (count <= -100) {
    return (
      <article className="article">
        <img
          src="https://th.bing.com/th/id/R.62741d01fb0efb0f8273f98beb5c44ac?rik=j5nbiONDfYGmJg&riu=http%3a%2f%2fpm1.narvii.com%2f6680%2fa3e49d4206a5c902055be10477fbbca6377c39c9_00.jpg&ehk=mQvOSiTb%2fwhi7a9Ju7UtevcCvDeVXlqF9toZmKCPLcw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
          alt="AlfaOne Development"
          className="img"
        />
      </article>
    );
  }

  return (
    <article className="article">
      <button
        className={props.class}
        onClick={() => setCount(count => count + props.operation)}
      >
        {props.text}
      </button>
      <p>{count}</p>
    </article>
  );
}
export default Button;
