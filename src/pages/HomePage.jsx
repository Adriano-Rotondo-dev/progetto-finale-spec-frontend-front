import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="mb-4">Benvenuto a Lorwyn Revisited</h1>

          <p className="lead">
            Questo progetto è il mio lavoro finale per il corso di
            specializzazione Front-End con Boolean, ma è anche la mia love
            letter a uno dei blocchi di <strong>Magic: The Gathering</strong>{" "}
            che amo di più.
          </p>

          <p>
            Questa Single Page Application permette agli utenti di esplorare e
            confrontare alcune delle carte del blocco di <strong>Lorwyn</strong>
            , che include:
            <br />
            <em>Lorwyn, Morningtide, Shadowmoor ed Eventide</em>.
          </p>

          <div className="mt-4">
            <Link to="/cards" className="btn btn-primary btn-lg">
              Esplora le carte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
