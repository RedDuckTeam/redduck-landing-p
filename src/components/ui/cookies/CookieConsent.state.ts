export interface CookieConsentState {
  visible: boolean;
  style: React.CSSProperties;
  buttonStyle: React.CSSProperties;
  declineButtonStyle: React.CSSProperties;
  contentStyle: React.CSSProperties;
  overlayStyle: React.CSSProperties;
}

export const defaultState: CookieConsentState = {
  visible: false,
  style: {
    position: 'fixed',
    zIndex: '20',
  },
  buttonStyle: {
    width: '100%',
  },
  declineButtonStyle: {
    width: '100%',
  },
  contentStyle: {
    width: '100%',
  },
  overlayStyle: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: '19',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
};
