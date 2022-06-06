import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../empliyers-add-form/employers-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Tatiana Deeva", salary: 1000, increase: true, rise: false, id: 1 },
        { name: "Aleksandr Ermoshin", salary: 2000, increase: false, rise: true, id: 2 },
        { name: "Yan Toples", salary: 3000, increase: false, rise: false, id: 3 }
      ],
      term: '',
      filter: 'all'
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addEmloyer = (info) => {
    this.setState(({data}) => {
      const newArr = [...data, {
        ...info,
        increase: false,
        rise: false,
        id: (Math.random() * 100).toFixed(2)
      }];
      return {
        data: newArr
      }
    })
  }
  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    })
  }

  filtersEmp = (items, filterValue) => {
    switch(filterValue) {
      case 'rise':
        return items.filter(item => item.rise )
      case 'salaryMore1000':
        return items.filter(item => item.salary > 1000 )
      default:
        return items;
    }
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  onFilterClick = (filter) => {
    this.setState({filter});
  }

  onSalaryChange = (id, target) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [target.name]: target.value}
        }
        return item;
      })
    }))
  }

  render() {
    const {data, term, filter} = this.state;
    const visibleData = this.filtersEmp(this.searchEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo data={data}/>
  
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter onFilter={this.onFilterClick} filter={filter}/>
        </div>
  
        <EmployersList 
          data={visibleData}
          onDelete={this.deleteItem}
          onSalaryChange={this.onSalaryChange}
          onToggleProp={this.onToggleProp} />
        <EmployersAddForm
          onSubmit={this.addEmloyer}/>
      </div>
    )
  }
}

export default App;