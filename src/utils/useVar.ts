export type StateDispatcher<T> = (callable: (previous: T) => T) => void;
export type StateGetter<T> = () => T;

export const useVar = <T>(
  defaultVal: T
): [StateGetter<T>, StateDispatcher<T>] => {
  let state = defaultVal;
  return [
    () => state,
    (callable) => {
      state = callable(state);
    },
  ];
};
