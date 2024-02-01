import "./App.css";
import requests from "./requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";
function App() {
  console.log("trending ", requests);
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>

      <Row
      isLargeRow={true}
      title="NetflixOrginals"
      fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending" 
      fetchUrl={requests.fetchTrending}/>
      <Row title="TopRated" 
      fetchUrl={requests.fetchTopRated}/>
      <Row title="ActionMovies" 
      fetchUrl={requests.fetchActionMovies}/>
      <Row title="ComedyMovies" 
      fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HorrorMovies" 
      fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="RomanticMovies" 
      fetchUrl={requests.fetchRpmanticMovies}/>
    </div>
  );
}
 export default App;