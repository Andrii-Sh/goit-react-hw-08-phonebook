import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <div>
      <Typography variant="h3" component="h1" align="center" sx={{ mt: 10 }}>
        The Best Home Page!!!
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Typography>
      {/* <h1>
        The BEST Home page!!!
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1> */}
    </div>
  );
};

export default Home;
