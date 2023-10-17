import { FunctionComponent, SVGProps } from 'react';

export type IconPropType = {
  Component: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  classes?: string;
};
