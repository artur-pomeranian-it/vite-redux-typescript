import { useAppSelector } from '../../redux/hooks';
import { selectBackgroundColor } from '../../redux/settingsSlice';

type Props = React.PropsWithChildren;

export const Card = ({ children }: Props) => {
  const color = useAppSelector(selectBackgroundColor);
  return <div className={`card card--${color}`}>{children}</div>;
};
