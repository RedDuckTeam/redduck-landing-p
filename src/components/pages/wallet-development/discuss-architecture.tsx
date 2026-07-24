import { DiscussArchitecture as DiscussArchitectureShared } from '~/components/common';

export function DiscussArchitecture() {
  return (
    <DiscussArchitectureShared
      title="_DISCUSS YOUR PROTOCOL ARCHITECTURE_"
      theme="light"
      images={{
        left: '/images/wallet/discuss-left.png',
        right: '/images/wallet/discuss-right.png',
      }}
    />
  );
}

export default DiscussArchitecture;
