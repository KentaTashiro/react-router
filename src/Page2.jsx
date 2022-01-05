import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2のコンポーネントです。</h1>
      <Link to="/Page2/999">URL Parameter</Link>
      <br />
      <Link to="/Page2/999?name=tashiro">Query Parameter</Link>
    </div>
  );
};
