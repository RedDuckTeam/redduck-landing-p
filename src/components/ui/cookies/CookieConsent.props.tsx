import type { FunctionComponent, ReactNode } from 'react';
import React from 'react';

import { defaultCookieConsentName } from './constants/defaultCookieName';
import { POSITION_OPTIONS } from './constants/positionOptions';
import { SAME_SITE_OPTIONS } from './constants/sameSiteOptions';
import { VISIBILITY_OPTIONS } from './constants/visibilityOptions';

export interface CookieConsentProps {
  children?: ReactNode;
  style?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  declineButtonStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  disableStyles?: boolean;
  hideOnAccept?: boolean;
  hideOnDecline?: boolean;
  onAccept?: (acceptedByScrolling: boolean) => void;
  onDecline?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  buttonText?: string | ReactNode | Function;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  declineButtonText?: string | ReactNode | Function;
  cookieName?: string;
  cookieValue?: string | object;
  declineCookieValue?: string | object;
  setDeclineCookie?: boolean;
  debug?: boolean;
  expires?: number;
  containerClasses?: string;
  contentClasses?: string;
  buttonClasses?: string;
  buttonWrapperClasses?: string;
  declineButtonClasses?: string;
  buttonId?: string;
  declineButtonId?: string;
  overlayClasses?: string;
  ariaAcceptLabel?: string;
  ariaDeclineLabel?: string;
  disableButtonStyles?: boolean;
  enableDeclineButton?: boolean;
  flipButtons?: boolean;
  cookieSecurity?: boolean;
  overlay?: boolean;
  acceptOnOverlayClick?: boolean;
  acceptOnScroll?: boolean;
  acceptOnScrollPercentage?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ButtonComponent?: any;
  extraCookieOptions?: object;
  overlayStyle?: object;
  customContentAttributes?: object;
  customContainerAttributes?: object;
  customButtonProps?: object;
  customDeclineButtonProps?: object;
  customButtonWrapperAttributes?: object;
  onOverlayClick?: () => void;
  // these should be enums
  location?: string;
  visible?: string;
  sameSite?: 'strict' | 'Strict' | 'lax' | 'Lax' | 'none' | 'None';
}

const DefaultButtonComponent: FunctionComponent<{
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export const defaultCookieConsentProps = {
  disableStyles: false,
  hideOnAccept: true,
  hideOnDecline: true,
  location: POSITION_OPTIONS.BOTTOM,
  visible: VISIBILITY_OPTIONS.BY_COOKIE_VALUE,
  onAccept: (_acceptedByScrolling: boolean) => {},
  onDecline: () => {},
  cookieName: defaultCookieConsentName,
  cookieValue: 'true',
  declineCookieValue: 'false',
  setDeclineCookie: true,
  buttonText: 'I understand',
  declineButtonText: 'I decline',
  debug: false,
  expires: 365,
  containerClasses: 'CookieConsent',
  contentClasses: '',
  buttonClasses: '',
  buttonWrapperClasses: '',
  declineButtonClasses: '',
  extraCookieOptions: {},
  disableButtonStyles: false,
  enableDeclineButton: false,
  flipButtons: false,
  sameSite: SAME_SITE_OPTIONS.LAX,
  ButtonComponent: DefaultButtonComponent,
  overlay: false,
  overlayClasses: '',
  onOverlayClick: () => {},
  acceptOnOverlayClick: false,
  ariaAcceptLabel: 'Accept cookies',
  ariaDeclineLabel: 'Decline cookies',
  acceptOnScroll: false,
  acceptOnScrollPercentage: 25,
  customContentAttributes: {},
  customContainerAttributes: {},
  customButtonProps: {},
  customDeclineButtonProps: {},
  customButtonWrapperAttributes: {},
  style: {},
  buttonStyle: {},
  declineButtonStyle: {},
  contentStyle: {},
  overlayStyle: {},
};
