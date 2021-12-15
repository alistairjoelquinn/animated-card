import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';

import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

const Page = ({ children }) => {
    return (
        <div>
            <Normalize />
            <GlobalStyles />
            <Typography />
            {children}
        </div>
    );
};

Page.propTypes = {
    children: PropTypes.any,
};

export default Page;
