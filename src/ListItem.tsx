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
    <label>
      <input type="checkbox" />
      <span className='list-item__label'>{children}</span>
    </label>
  </li>
);

export default ListItem;
