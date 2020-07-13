import { useEffect } from 'react';

export default (effect, dependencies) => {
  const status = {}; // mutable status object
  useEffect(() => {
    status.aborted = false;
    // pass the mutable object to the effect callback
    // store the returned value for cleanup
    const cleanUpFn = effect(status);
    return () => {
      // mutate the object to signal the consumer
      // this effect is cleaning up
      status.aborted = true;
      if (typeof cleanUpFn === 'function') {
        // run the cleanup function
        cleanUpFn();
      }
    };
  }, [...dependencies]);
};
