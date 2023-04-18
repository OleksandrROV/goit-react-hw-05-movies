import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastInfo } from 'servises/apiServis';
// import { BASE_IMG_URL } from 'servises/constans';
import { ListCast } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchCastInfo(id).then(setCast);
  }, [id]);
  return (
    <div>
      <h1>Cast:</h1>
      {cast && !!cast.length ? (
        <ListCast>
          {cast.map(actor => (
            <li className="list_item" key={actor.id}>
              <img
                className="imag_list"
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                    : 'https://mir-s3-cdn-cf.behance.net/projects/404/8a3e45124050039.Y3JvcCw4MDgsNjMyLDAsMA.png'
                }
                alt={actor.name}
                width="300"
              />
              <p className="actor_name">{actor.name}</p>
            </li>
          ))}
        </ListCast>
      ) : (
        <div>We don't have any cast for this movie</div>
      )}
    </div>
  );
};
export default Cast;
