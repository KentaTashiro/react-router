import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();

  const onClickDetailA = () => history.push("/Page1/detailA");

  return (
    <div>
      <h1>Page1のコンポーネントです。</h1>
      <Link to={{ pathname: "/Page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/Page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
