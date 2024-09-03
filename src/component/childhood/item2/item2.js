export function Card({children}, props) {
    return (
        <div className="card">
          <div className="card-content">
            <h1>{props.name}</h1>
            {children}
          </div>
        </div>
    )
}
export default function Profile() {
    return (
      <div>
        <Card name="photo">
            <img
              className="avatar"
              src="https://i.imgur.com/OKS67lhm.jpg"
              alt="Aklilu Lemma"
              width={70}
              height={70}
            />
        </Card>
        <Card name="About">
            <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
        </Card>
      </div>
    );
  }
  