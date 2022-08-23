import * as tooltipStyles from './tooltip.module.css';
import { useState } from 'react';

const Tooltip = ({ children, text, ...rest }) => {
    const [show, setShow] = useState(false);

    return (
        <div className={tooltipStyles.tooltipContainer}>
            <div
                className={`${tooltipStyles.tooltipBox} ${
                    show && tooltipStyles.visible
                }`}
            >
                {text}
                <span className={tooltipStyles.tooltipArrow} />
            </div>
            <div
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                {...rest}
            >
                {children}
            </div>
        </div>
    );
};

export default Tooltip;
