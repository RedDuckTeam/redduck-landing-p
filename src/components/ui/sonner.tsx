import type { ToasterProps } from 'sonner';
import { Toaster as Sonner } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={'dark' as ToasterProps['theme']}
      className="toaster group"
      style={
        {
          '--normal-bg': 'black',
          '--normal-text': 'white',
          '--normal-border': 'var(--concrete)',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export default Toaster;
