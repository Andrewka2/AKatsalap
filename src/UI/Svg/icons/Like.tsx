import React, {FunctionComponent} from 'react';
import { Svg, SvgProps } from '../../../UI/Svg';

const Icon: FunctionComponent<SvgProps> = (props) => {
    return (
        <Svg width="20" height="18" viewBox="0 0 20 18" fill="none" {...props} >
            <path d="M10 17.0033C9.71527 17.0033 9.44077 16.9047 9.22684 16.7257C8.41888 16.0508 7.63992 15.4165 6.95267 14.8569L6.94916 14.854C4.93423 13.2135 3.19427 11.7968 1.98364 10.4012C0.630341 8.84107 0 7.36182 0 5.74582C0 4.17574 0.563507 2.72724 1.58661 1.66697C2.62192 0.594153 4.04251 0.0032959 5.58716 0.0032959C6.74164 0.0032959 7.79892 0.352008 8.72955 1.03966C9.19922 1.38677 9.62494 1.81158 10 2.3071C10.3752 1.81158 10.8008 1.38677 11.2706 1.03966C12.2012 0.352008 13.2585 0.0032959 14.413 0.0032959C15.9575 0.0032959 17.3782 0.594153 18.4135 1.66697C19.4366 2.72724 20 4.17574 20 5.74582C20 7.36182 19.3698 8.84107 18.0165 10.4011C16.8059 11.7968 15.0661 13.2134 13.0515 14.8537C12.363 15.4141 11.5828 16.0494 10.773 16.726C10.5592 16.9047 10.2846 17.0033 10 17.0033ZM5.58716 1.12261C4.37363 1.12261 3.25882 1.58533 2.44781 2.42562C1.62476 3.27859 1.17142 4.45768 1.17142 5.74582C1.17142 7.10495 1.70013 8.32049 2.88559 9.68705C4.03137 11.008 5.73563 12.3955 7.70889 14.0022L7.71255 14.0051C8.4024 14.5668 9.18442 15.2036 9.99832 15.8835C10.8171 15.2023 11.6003 14.5645 12.2916 14.0019C14.2647 12.3953 15.9688 11.008 17.1146 9.68705C18.2999 8.32049 18.8286 7.10495 18.8286 5.74582C18.8286 4.45768 18.3752 3.27859 17.5522 2.42562C16.7413 1.58533 15.6264 1.12261 14.413 1.12261C13.524 1.12261 12.7078 1.3926 11.9872 1.925C11.3449 2.39967 10.8975 2.99971 10.6352 3.41957C10.5003 3.63547 10.2629 3.76434 10 3.76434C9.73709 3.76434 9.49966 3.63547 9.36478 3.41957C9.10263 2.99971 8.65524 2.39967 8.01285 1.925C7.29218 1.3926 6.47598 1.12261 5.58716 1.12261Z" fill="#FF465B"/>
        </Svg>
    );
};

export default Icon;