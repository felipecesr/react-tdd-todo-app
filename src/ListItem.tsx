import { FC, ReactNode, useId } from "react";
import "./ListItem.css";

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  isCompleted: boolean;
}

const ListItem: FC<ListItemProps> = ({ children, isCompleted, ...props }) => {
  const inputId = useId();
  return (
    <li className="list-item" {...props}>
      <input id={inputId} type="checkbox" checked={isCompleted} />
      <label htmlFor={inputId} className="list-item__label">
        <span className="list-item__label">{children}</span>
      </label>
    </li>
  );
};

export default ListItem;
