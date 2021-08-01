import { Grid } from "@material-ui/core";

import "./App.css";
import Search from "./Components/Search";
import PageTitle from "./Components/PageTitle";

function App() {
  const pageTitle = "URL Link Shortener";

  return (
    <Grid
      className="App"
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <PageTitle title={pageTitle}/>
      <Search />
    </Grid>
  );
}

export default App;
