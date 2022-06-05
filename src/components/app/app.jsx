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
      ]
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
    console.log('submit');
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

  render() {
    return (
      <div className="app">
        <AppInfo
          data={this.state.data}/>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <EmployersList 
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp} />
        <EmployersAddForm
          onSubmit={this.addEmloyer}/>
      </div>
    )
  }
}

export default App;