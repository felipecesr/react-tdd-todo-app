import { FC, ReactNode } from 'react';
import './ListItem.css'

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  isCompleted: boolean;
}

const ListItem: FC<ListItemProps> = ({ children, isCompleted, ...props }) => (
  <li
    className={`list-item ${isCompleted ? "list-item--done" : ""}`}
    {...props}
  >
    <span className='list-item__label'>{children}</span>
  </li>
);

export default ListItem;
