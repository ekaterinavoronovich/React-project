import { FC, ReactElement } from 'react';
interface Props {
  svgElement: ReactElement<React.SVGProps<SVGAElement>>;
}
const SVGWrapper: FC<Props> = ({ svgElement }) => <div>{svgElement}</div>;
export default SVGWrapper;
