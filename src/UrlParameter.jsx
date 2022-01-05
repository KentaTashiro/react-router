import { useParams, useLocation } from "react-router-dom";

//queryパラメータの使用方法（関数に切り出し）
const queryParamGet = (location, key) => {
  const { search } = location;
  const query = new URLSearchParams(search);
  console.log(`queryパラメータ：${query.get(key)}`);
  return query.get(key);
};

export const UrlParameter = () => {
  const { id } = useParams();
  const location = useLocation();

  return (
    <div>
      <h1>UrlParameterのコンポーネントです。</h1>
      <p>{`パラメーターは${id}です`}</p>
      <p>{`クエリパラメーターは${queryParamGet(location, "name")}です`}</p>
    </div>
  );
};
