import { DiscussArchitecture as DiscussArchitectureShared } from '~/components/common';

export function DiscussArchitecture() {
  return (
    <DiscussArchitectureShared
      title="_DISCUSS YOUR SECURITY POSTURE_"
      theme="dark"
      images={{
        left: '/images/defi/discuss-left.png',
        right: '/images/defi/discuss-right.png',
      }}
    />
  );
}

export default DiscussArchitecture;
