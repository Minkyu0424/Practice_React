import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import styles from "./Home.module.css";
import NavBar from "./NavBar";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [datas, setDatas] = useState({});

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setDatas(json.data.movie);
        setLoading(false);
      });
  }, [id]);
  console.log(datas);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <img
            alt="error"
            className={styles.backgroundImg}
            src={datas.background_image}
          />
          <NavBar />
          <div className={styles.detailPart}>
            <div className={styles.detailBox}>
              <img src={datas.medium_cover_image} alt={datas.title} />
              <ul>
                <h2>
                  <a href={datas.url}>{datas.title}</a>
                </h2>
                <h3>({datas.year})</h3>
                <h4>Rating : {datas.rating}</h4>
                <h4>Runtime : {datas.runtime} m</h4>
                <h4>Genres</h4>
                <ul className={styles.genresUl}>
                  {datas.genres.map((g) => (
                    <p key={g}>{g}</p>
                  ))}
                </ul>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
