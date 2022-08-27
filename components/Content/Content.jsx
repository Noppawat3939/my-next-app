import { useEffect, useState } from "react";
import { Article } from "../Article";
import contentStyle from "../../styles/Content.module.css";

const Content = ({ list }) => {
  const [contentList, setContentList] = useState([]);

  const { content_container, content_title } = contentStyle;

  useEffect(() => {
    if (contentList) {
      setContentList(list);
    } else {
      setContentList("lorem");
    }
  }, []);

  return (
    <div className={content_container}>
      <h4 className={content_title}>{list.title || contentList} &rarr;</h4>
      <Article description={list.body} />
    </div>
  );
};

export default Content;
