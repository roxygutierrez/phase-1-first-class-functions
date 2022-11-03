const receivesAFunction = (callback) => callback();

function myEmptyFunction() {}

const returnsANamedFunction = () => {
  return myEmptyFunction;
};

const returnsAnAnonymousFunction = () => {
  return () => 1;
};
