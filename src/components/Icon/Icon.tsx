import { FC } from "react";
import SVG, { Props as SVGProps } from "react-inlinesvg";

type CIconProps = {
  filename?: string;
} & Partial<SVGProps>;

const CIcon: FC<CIconProps> = ({ filename, src, ...rest }) => (
  <SVG src={src || `/svg/${filename}.svg`} {...rest} />
);

export default CIcon;
