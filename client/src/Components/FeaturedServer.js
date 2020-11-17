import React from 'react';
import './FeaturedServer.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SearchIcon from '@material-ui/icons/Search';
import ExploreIcon from '@material-ui/icons/Explore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
      display: 'flex',
    minWidth: 145,
    flexDirection: 'column',
  },
    cardMedia: {
      maxHeight: 50,
    paddingTop: '56.25%', // 16:9
  },
    cardContent: {
        flexGrow: 1,
        backgroundColor: "#292b2f",
        '&:hover': {
            backgroundColor: "#202326",
        },
    },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function FeaturedServer() {
  const classes = useStyles();
  
    return (
        <div className="main-window">
           <Container className={`grid-view ${classes.cardGrid}`} maxWidth="320px">
                {/* End hero unit */}
                {/* <Grid item key="11" lg={12}>
                    <Card className={classes.card} style={{maxHeight: 300}}>
                  <CardMedia
                            className={classes.cardMedia}
                    height="300px"
                    image="https://cdn-images-1.medium.com/fit/t/1600/480/1*Aowd_8D-rdIAwmirArwYRg.png"
                    title="Image title"
                  />           
                </Card>
              </Grid> */}
                <div className="search-community">
                    <div className="community-search">
                        <h2 className="search-header">Find Your Community in Diswire</h2>
                        <p className="search-desc">From gaming,to music,to learning,there's a place for you</p>
                        <div className="community-search-input">
                        <form>
                          <input placeholder="Explore Communities" />
                  <button className="community-inputbutton" type="submit">Search</button>
                  <SearchIcon style={{fontSize:'30px',paddingTop:'5px'}} className="search-icon"/>
                        </form>
                        </div>
                    </div>
                </div>
                <h2 className="feature-tag">Featured Communities</h2>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" className="server-name">
                        <CheckCircleIcon style={{fontSize: '18px',color:' #42b680',paddingRight: '5px'}}/>Heading
                    </Typography>
                    <Typography className="server-desc">
                                This is a media card. You can use this section to describe the content.
                    </Typography>
                            <br></br>
                                <p className="num-members"><span><FiberManualRecordIcon style={{ height: '11px',width:'11px'}}/></span> 75 Members</p>
                    </CardContent>
                </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          <div className="community-footer"><ExploreIcon style={{fontSize: '30px',background: "#202326",padding:'6px',borderRadius:'8px'}}/>
            <h2 className="footer-text">There are more communities out there!</h2>
            <p>Try searching from them.</p>
          </div>
        </Container>
        </div>
    )
}

export default FeaturedServer
