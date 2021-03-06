export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> };

export interface INotyfIcon {
  className: string;
  tagName: keyof ElementTagNameMap;
  text: string;
}

export interface INotyfNotificationOptions {
  type: string;
  className: string;
  duration: number;
  icon: INotyfIcon | false;
  backgroundColor: string;
  message: string;
  ripple: boolean;
}

export interface INotyfOptions {
  types: Array<DeepPartial<INotyfNotificationOptions>>;
  duration: number;
  ripple: boolean;
}

export const DEFAULT_OPTIONS: INotyfOptions = {
  types: [
    {
      type: 'success',
      className: 'notyf__toast--success',
      backgroundColor: '#3dc763',
      icon: {
        className: 'notyf__icon--success',
        tagName: 'i',
      },
    },
    {
      type: 'error',
      className: 'notyf__toast--error',
      backgroundColor: '#ed3d3d',
      icon: {
        className: 'notyf__icon--error',
        tagName: 'i',
      },
    },
  ],
  duration: 2000,
  ripple: true,
};
