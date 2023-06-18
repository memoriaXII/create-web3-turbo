'use client';

import { HydrateProps, Hydrate as RQHydrate } from '@tanstack/react-query';

function Hydrate(props: HydrateProps) {
  return <RQHydrate {...props} />;
}

export default Hydrate;
