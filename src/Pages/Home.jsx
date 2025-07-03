import React from 'react';
import {Grid,Typography,Button,Box,AppBar,Toolbar,Container,Stack,Paper,List,ListItem,ListItemText,Link} from '@mui/material';

const Home = () => {
  const courses = [
    {
      icon: '',
      title: 'Front-End Development',
      items: ['HTML / CSS', 'React Js', 'Angular Js']
    },
    {
      icon: '}',
      title: 'Back-End Development',
      items: ['Node Js', 'Python', 'Java']
    },
    {
      icon: '',
      title: 'Mobile App Development',
      items: ['Android studio', 'React Native', 'Flutter']
    },
    {
      icon: '',
      title: 'Data Analyst',
      items: ['SQL', 'Python', 'Power BI']
    }
  ];

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 4 }}>
            {['Home', 'Courses', 'About', 'Contact'].map((text) => (<Button key={text} color="primary">{text}</Button>))}

      </Box><Button variant="outlined" color="primary">Book a Demo</Button></Toolbar></AppBar>

      <Box sx={{ padding: '50px 80px', backgroundColor: '#fff' }}>
        <Grid container spacing={4} alignItems="center"><Grid item xs={12} md={6}>
          <Typography variant="h3"component="h1"sx={{ fontWeight: 200, color: '#2c1a47' }}>Your career, our mentors,<br />

      <Box component="span"sx={{ color: '#f57c00', fontWeight: 'bold' }}>success</Box>{' '}starts now.</Typography>

      <Typography variant="subtitle1" sx={{ marginTop: 2, color: '#2c1a47' }}>Bridging Students & Industry with Real Skills, expert mentorship</Typography>

      <Button variant="contained"sx={{
                marginTop: 4,
                backgroundColor: '#2c1a47',
                textTransform: 'none',
                fontWeight: 'bold',
                borderRadius: '10px',
                padding: '10px 20px',
                '&:hover': { backgroundColor: '#452a70' }}}>Claim Your Spot</Button></Grid>

      <Grid item xs={12} md={6}>
            <Box component="img"src="cyber.jpg" alt="man" sx={{ width: '100%', maxWidth: '600px', height: 'auto' }}/></Grid></Grid></Box>

      <Box sx={{ py: 6, backgroundColor: '#fff' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h5" sx={{fontWeight: 'bold',mb: 2,fontFamily: 'Georgia, serif',color: '#240054'}}>Why Choose CyberCues?</Typography>

        <Typography variant="body1" sx={{ mb: 4,fontFamily: 'Georgia, serif',color: '#240054'}}>
            CyberCues provides a comprehensive range of professionally designed
            courses across multiple domains, with the guidance of experienced
            mentors to help you achieve your career goals and succeed in your
            professional journey.</Typography>

          <Stack direction="row" justifyContent="center" spacing={4}>
            {['Course', 'Mentorship', 'Referral'].map((label) => (
              <Button key={label} variant="contained" sx={{
                  backgroundColor: '#240054',
                  borderRadius: '25px',
                  px: 4,
                  fontWeight: 'bold',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#3a005e'}}}>{label}</Button>))} </Stack>
        </Container>
      </Box>

      <Box sx={{ py: 6, backgroundColor: '#f4f0ff' }}>
        <Container>
          <Typography variant="h5"sx={{mb: 4,color: '#240054',fontWeight: 'bold',fontFamily: 'Georgia'}}>Instructor-Led Live Courses</Typography>


          <Grid container spacing={4}>
            {courses.map((course, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}><Paper
                  elevation={0}
                  sx={{p: 3,
                    borderRadius: 4,
                    backgroundColor: '#fff',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'}}>
                      
                  <Typography variant="h4" sx={{ color: '#240054' }}>{course.icon}</Typography>
                  <Typography variant="subtitle1"sx={{ mt: 2, mb: 1, fontWeight: 'bold', color: '#240054' }}>{course.title}</Typography>
                  <List dense>{course.items.map((item, idx) => (<ListItem key={idx} sx={{ py: 0 }}><ListItemText
                          primary={`• ${item}`}
                          primaryTypographyProps={{
                            color: '#240054',
                            fontSize: '14px'
                          }}
                        />
                      </ListItem>))}</List>
                  <Box sx={{ mt: 2 }}>
                    <Button variant="contained" fullWidth sx={{
                        borderRadius: '20px',
                        backgroundColor: '#000',
                        color: '#fff',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        '&:hover': { backgroundColor: '#333' }}}>View More</Button>
                  </Box>
                </Paper>
              </Grid>))}
           
           
<Box sx={{ py: 6, backgroundColor: '#fff' }}>
  <Container>
    <Typography variant="h5" sx={{ mb: 4, color: '#240054', fontWeight: 'bold', fontFamily: 'Georgia, serif'}}>Talent Accelerator</Typography>

    <Grid container spacing={4}><Grid item xs={12} md={6}>
        <Paper sx={{display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 4,
            borderRadius: 5,
            backgroundColor: '#f4f0ff'
          }}>
          <Box>
            <Typography variant="h4" sx={{ color: '#240054', fontWeight: 'bold' }}>01</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#240054', mt: 1 }}>Get 1:1 mentorship</Typography>

            <Typography variant="body2" sx={{ mt: 1, color: '#240054' }}>Personalized Guidance for Growth</Typography></Box>
          <Box
            component="img" src="photo1.jpg"  alt="mentorship" sx={{ width: 150, height: 150, objectFit: 'contain' }}/></Paper></Grid>

      <Grid item xs={12} md={6}><Paper  
          sx={{display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 4,
            borderRadius: 5,
            backgroundColor: '#f4f0ff'}}>
          <Box>
            <Typography variant="h4" sx={{ color: '#240054', fontWeight: 'bold' }}>02</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#240054', mt: 1 }}>Enhance Your Skill</Typography>

            <Typography variant="body2" sx={{ mt: 1, color: '#240054' }}>Unlock Your Potential with Expert Guidance</Typography></Box>
          <Box component="img" src="photo2 (1).jpg" alt="enhance-skill"sx={{ width: 150, height: 150, objectFit: 'contain' }}/></Paper></Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 4,
            borderRadius: 5,
            backgroundColor: '#f4f0ff'}}>
          <Box>
            <Typography variant="h4" sx={{ color: '#240054', fontWeight: 'bold' }}>03</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#240054', mt: 1 }}>HR Expert Insights</Typography>
            <Typography variant="body2" sx={{ mt: 1, color: '#240054' }}>Prepare, Perform, and Succeed</Typography></Box>
          <Box component="img" src="photo3 (1).jpg" sx={{ width: 150, height: 150, objectFit: 'contain' }}/>
        </Paper></Grid>
    </Grid>
  </Container></Box>
</Grid>
    <Box sx={{ bgcolor: '#f5f2ff', color: '#240054', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: 'Georgia' }}>
              Cybercues
            </Typography>
            <Typography mt={1}>
              Empowering Education, Inspiring Change.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: 'Georgia' }}>Quick Links</Typography>
            <Box mt={1}>
              <Link href="#" underline="hover" color="#4d3d8f" display="block">Home</Link>
              <Link href="#" underline="hover" color="#4d3d8f" display="block">Courses</Link>
              <Link href="#" underline="hover" color="#4d3d8f" display="block">About</Link>
              <Link href="#" underline="hover" color="#4d3d8f" display="block">Contact</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: 'Georgia' }}>Courses</Typography>
            <Box mt={1}>
              <Typography>Front-end Development</Typography>
              <Typography>Back-end Development</Typography>
              <Typography>Mobile App Development</Typography>
              <Typography>Data Analyst</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: 'Georgia' }}>Contact</Typography>
            <Box mt={1}>
              <Typography> WhatsApp: +91 9489469677</Typography>
              <Typography>cybercues@gmail.com</Typography>
              <Typography> Chennai</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;



// import React from 'react';
// import {
//   Grid, Typography, Button, Box, AppBar, Toolbar, Container,
//   Stack, Paper, List, ListItem, ListItemText, Link
// } from '@mui/material';

// const Home = () => {
//   return (
//     <>
//       {/* Navbar */}
//       <AppBar position="static" color="transparent" elevation={0}>
//         <Toolbar sx={{ justifyContent: 'space-between' }}>
//           <Box sx={{ display: 'flex', gap: 4 }}>
//             <Button color="primary">Home</Button>
//             <Button color="primary">Courses</Button>
//             <Button color="primary">About</Button>
//             <Button color="primary">Contact</Button>
//           </Box>
//           <Button variant="outlined" color="primary">Book a Demo</Button>
//         </Toolbar>
//       </AppBar>

//       {/* Hero Section */}
//       <Box sx={{ padding: '50px 80px', backgroundColor: '#fff' }}>
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Typography variant="h3" component="h1" sx={{ fontWeight: 200, color: '#2c1a47' }}>
//               Your career, our mentors,<br />
//               <Box component="span" sx={{ color: '#f57c00', fontWeight: 'bold' }}>success</Box> starts now.
//             </Typography>
//             <Typography variant="subtitle1" sx={{ marginTop: 2, color: '#2c1a47' }}>
//               Bridging Students & Industry with Real Skills, expert mentorship
//             </Typography>
//             <Button variant="contained" sx={{
//               marginTop: 4,
//               backgroundColor: '#2c1a47',
//               textTransform: 'none',
//               fontWeight: 'bold',
//               borderRadius: '10px',
//               padding: '10px 20px',
//               '&:hover': { backgroundColor: '#452a70' }
//             }}>
//               Claim Your Spot
//             </Button>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box component="img" src="cyber.jpg" alt="man" sx={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Why Choose Us */}
//       <Box sx={{ py: 6, backgroundColor: '#fff' }}>
//         <Container maxWidth="md" sx={{ textAlign: 'center' }}>
//           <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, fontFamily: 'Georgia, serif', color: '#240054' }}>
//             Why Choose CyberCues?
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 4, fontFamily: 'Georgia, serif', color: '#240054' }}>
//             CyberCues provides a comprehensive range of professionally designed courses across multiple domains,
//             with the guidance of experienced mentors to help you achieve your career goals and succeed in your professional journey.
//           </Typography>
//           <Stack direction="row" justifyContent="center" spacing={4}>
//             <Button variant="contained" sx={{
//               backgroundColor: '#240054',
//               borderRadius: '25px',
//               px: 4,
//               fontWeight: 'bold',
//               textTransform: 'none',
//               '&:hover': { backgroundColor: '#3a005e' }
//             }}>Course</Button>
//             <Button variant="contained" sx={{
//               backgroundColor: '#240054',
//               borderRadius: '25px',
//               px: 4,
//               fontWeight: 'bold',
//               textTransform: 'none',
//               '&:hover': { backgroundColor: '#3a005e' }
//             }}>Mentorship</Button>
//             <Button variant="contained" sx={{
//               backgroundColor: '#240054',
//               borderRadius: '25px',
//               px: 4,
//               fontWeight: 'bold',
//               textTransform: 'none',
//               '&:hover': { backgroundColor: '#3a005e' }
//             }}>Referral</Button>
//           </Stack>
//         </Container>
//       </Box>

//       {/* Courses Section - Manual blocks */}
//       <Box sx={{ py: 6, backgroundColor: '#f4f0ff' }}>
//         <Container>
//           <Typography variant="h5" sx={{ mb: 4, color: '#240054', fontWeight: 'bold', fontFamily: 'Georgia' }}>
//             Instructor-Led Live Courses
//           </Typography>
//           <Grid container spacing={4}>
//             {/* Front-End */}
//             <Grid item xs={12} sm={6} md={3}>
//               <Paper elevation={0} sx={{ p: 3, borderRadius: 4, backgroundColor: '#fff', height: '100%' }}>
//                 <Typography variant="subtitle1" sx={{ mt: 2, mb: 1, fontWeight: 'bold', color: '#240054' }}>
//                   Front-End Development
//                 </Typography>
//                 <List dense>
//                   <ListItem><ListItemText primary="• HTML / CSS" /></ListItem>
//                   <ListItem><ListItemText primary="• React Js" /></ListItem>
//                   <ListItem><ListItemText primary="• Angular Js" /></ListItem>
//                 </List>
//                 <Button fullWidth variant="contained" sx={{ mt: 2, borderRadius: '20px', backgroundColor: '#000' }}>
//                   View More
//                 </Button>
//               </Paper>
//             </Grid>

//             {/* Back-End */}
//             <Grid item xs={12} sm={6} md={3}>
//               <Paper elevation={0} sx={{ p: 3, borderRadius: 4, backgroundColor: '#fff', height: '100%' }}>
//                 <Typography variant="subtitle1" sx={{ mt: 2, mb: 1, fontWeight: 'bold', color: '#240054' }}>
//                   Back-End Development
//                 </Typography>
//                 <List dense>
//                   <ListItem><ListItemText primary="• Node Js" /></ListItem>
//                   <ListItem><ListItemText primary="• Python" /></ListItem>
//                   <ListItem><ListItemText primary="• Java" /></ListItem>
//                 </List>
//                 <Button fullWidth variant="contained" sx={{ mt: 2, borderRadius: '20px', backgroundColor: '#000' }}>
//                   View More
//                 </Button>
//               </Paper>
//             </Grid>

//             {/* Mobile App */}
//             <Grid item xs={12} sm={6} md={3}>
//               <Paper elevation={0} sx={{ p: 3, borderRadius: 4, backgroundColor: '#fff', height: '100%' }}>
//                 <Typography variant="subtitle1" sx={{ mt: 2, mb: 1, fontWeight: 'bold', color: '#240054' }}>
//                   Mobile App Development
//                 </Typography>
//                 <List dense>
//                   <ListItem><ListItemText primary="• Android Studio" /></ListItem>
//                   <ListItem><ListItemText primary="• React Native" /></ListItem>
//                   <ListItem><ListItemText primary="• Flutter" /></ListItem>
//                 </List>
//                 <Button fullWidth variant="contained" sx={{ mt: 2, borderRadius: '20px', backgroundColor: '#000' }}>
//                   View More
//                 </Button>
//               </Paper>
//             </Grid>

//             {/* Data Analyst */}
//             <Grid item xs={12} sm={6} md={3}>
//               <Paper elevation={0} sx={{ p: 3, borderRadius: 4, backgroundColor: '#fff', height: '100%' }}>
//                 <Typography variant="subtitle1" sx={{ mt: 2, mb: 1, fontWeight: 'bold', color: '#240054' }}>
//                   Data Analyst
//                 </Typography>
//                 <List dense>
//                   <ListItem><ListItemText primary="• SQL" /></ListItem>
//                   <ListItem><ListItemText primary="• Python" /></ListItem>
//                   <ListItem><ListItemText primary="• Power BI" /></ListItem>
//                 </List>
//                 <Button fullWidth variant="contained" sx={{ mt: 2, borderRadius: '20px', backgroundColor: '#000' }}>
//                   View More
//                 </Button>
//               </Paper>
//             </Grid>
            
//           </Grid>
//         </Container>
//       </Box>

//     </>
//   );
// };

// export default Home;




