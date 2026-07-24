import { DiscussArchitecture as DiscussArchitectureShared } from '~/components/common';

export function DiscussPlatform() {
  return (
    <DiscussArchitectureShared
      title="DISCUSS YOUR PLATFORM"
      theme="dark"
      images={{
        left: '/images/defi/discuss-left.png',
        right: '/images/defi/discuss-right.png',
      }}
    />
  );
}

export default DiscussPlatform;
