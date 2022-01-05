import { Link } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);
  return (
    <div>
      <h1>Page1のコンポーネントです。</h1>
      <Link to={{ pathname: "/Page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/Page1/detailB">DetailB</Link>
    </div>
  );
};
