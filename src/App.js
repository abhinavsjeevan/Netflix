import "./App.css";
import requests from "./Request";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Row from "./Components/Row";
function App() {
  console.log("trending ", requests);
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Banner fetchUrl={requests.fetchNetflixOriginals}></Banner>

      {/* <Row
      isLargeRow={true}
      title="NetflixOrginals"
      fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="TopRated" fetchUrl={requests.fetchTopRated}/>
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="RomanticMovies" fetchUrl={requests.fetchRpmanticMovies}/> */}
    </div>
  );
}
 export default App;
