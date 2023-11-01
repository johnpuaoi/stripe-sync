import invariant from 'tiny-invariant';

export type Resource = {
  resource: string;
  subresource?: string;
};

export function eventToResource(event: string): Resource {
  if (event.includes('checkout.session')) {
    return {
      resource: 'stripe_checkout_session',
      subresource: undefined,
    };
  }
  const split = event.split('.');
  const resource = split.at(-2);
  invariant(resource, `Could not find resource for event: ${event}`);

  if (split.length === 2) {
    return {
      resource: 'stripe_' + resource,
      subresource: undefined,
    };
  }
  if (split.length === 3) {
    return {
      resource: 'stripe_' + resource,
      subresource: 'stripe_' + split.at(0),
    };
  }
  throw new Error(`Could not parse event: ${event}`);
}
