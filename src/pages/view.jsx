import { useState, useEffect } from "react";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";
import { useParams } from "react-router-dom";

export default function View() {
  const [item, setItem] = useState({})
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
    }, []);

    const itemStyle = {
      container: {
        display: 'flex',
        gap: '20px',
        color: 'white',
        width: '800px',
        margin: '0 auto',
      },
    }

    if(!item) {
      return <Layout>Item not found</Layout>
    }

  return (
  <Layout>
    <div style={itemStyle.container}>
    <div>
      <div>{item?.cover ? <img src={item?.cover} width="400" /> : ''}</div>
    </div>
    
    <div>
    <h2>{item?.title}</h2>
    <div>{item?.author}</div>
    <div>{item?.intro}</div>
    <div>{item?.completed ? 'Leido' : 'Por terminar'}</div>
    <div>{item?.review}</div>
    </div>
    </div>
    </Layout>
  );
};