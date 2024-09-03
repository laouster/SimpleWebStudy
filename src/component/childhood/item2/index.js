import { getImageUrl } from './util.js';

export function Profile(props){
    return (
        <section className="profile">
        <h2>{props.h2}</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt={props.alt}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {props.profession}
          </li>
          <li>
            <b>Awards: {props.awards}</b> 
            {props.awardsDetail}
          </li>
          <li>
            <b>Discovered: </b>
            {props.discovered}
          </li>
        </ul>
      </section>
    )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile h2={'Maria Skłodowska-Curie'} profession={'physicist and chemist'} 
      awardsDetail={'(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)'} 
      awards={'4'} discovered={'polonium (chemical element)'} alt={'Maria Skłodowska-Curie'} />
      <Profile h2={'Katsuko Saruhashi'} profession={'geochemist'} 
      awardsDetail={'(Miyake Prize for geochemistry, Tanaka Prize)'} 
      awards={'2'} discovered={'polonium (chemical element)'} alt={'a method for measuring carbon dioxide in seawater'} />
    </div>
  );
}
