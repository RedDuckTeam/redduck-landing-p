import Cookies from 'js-cookie';

import { ConditionalWrapper } from './components/ConditionalWrapper';
import { POSITION_OPTIONS } from './constants/positionOptions';
import { VISIBILITY_OPTIONS } from './constants/visibilityOptions';
import { CookieConsent } from './CookieConsent';

export * from './constants';
export * from './utilities';
export { Cookies, CookieConsent, ConditionalWrapper };
// backwards compatibility exports
export { POSITION_OPTIONS as OPTIONS, VISIBILITY_OPTIONS as VISIBLE_OPTIONS };
export default CookieConsent;
