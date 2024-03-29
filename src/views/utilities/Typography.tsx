import { Grid } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from '../../ui-component/cards/SubCard';
import MainCard from '../../ui-component/cards/MainCard';
import { gridSpacing } from '../../services/constant';

// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => (
  <MainCard title="Basic Typography">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sm={6}>
        <SubCard title="Heading">
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <MuiTypography variant="h1" gutterBottom>
                h1. Heading
              </MuiTypography>
            </Grid>
            <Grid item>
              <MuiTypography variant="h2" gutterBottom>
                h2. Heading
              </MuiTypography>
            </Grid>
            <Grid item>
              <MuiTypography variant="h3" gutterBottom>
                h3. Heading
              </MuiTypography>
            </Grid>
            <Grid item>
              <MuiTypography variant="h4" gutterBottom>
                h4. Heading
              </MuiTypography>
            </Grid>
            <Grid item>
              <MuiTypography variant="h5" gutterBottom>
                h5. Heading
              </MuiTypography>
            </Grid>
            <Grid item>
              <MuiTypography variant="h6" gutterBottom>
                h6. Heading
              </MuiTypography>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  </MainCard>
);

export default Typography;
