type PropsType = Object;

export type Component<T extends PropsType = {}> = (
  props: T & { $target: HTMLElement }
) => void;
