
import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmployersList = ({data, onDelete, onToggleProp, onSalaryChange}) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <EmployersListItem 
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onSalaryChange={(e) => onSalaryChange(id, e.target)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
    )
  });

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployersList;