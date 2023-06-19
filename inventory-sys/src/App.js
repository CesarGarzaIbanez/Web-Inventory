import { MainRouter } from "./routers/MainRouter";

function App() {

  return (
    <div className="layout">

      <MainRouter></MainRouter>

      <footer className="footer">
        &copy; Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
