import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
} from '@material-ui/core';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        
      </Container>
    </Box>
  </>
);

export default Dashboard;
