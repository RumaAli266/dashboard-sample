import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from '../../../config';
import Logo from '../../../ui-component/Logo';
import { RootState } from '../../../app/store';
import { menuOpen } from '../../../features/customization/customizationSlice';
// import { MENU_OPEN } from 'store/actions';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state:RootState) => state.rootReducer.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase disableRipple onClick={() => dispatch(menuOpen(defaultId))} component={Link} to={config.defaultPath}>
      <img src={require('../../../assets/images/auth/cmlogo.svg').default} alt='mySvgImage' />
    </ButtonBase>
  );
};

export default LogoSection;
