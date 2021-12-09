import React, { useState } from 'react';

import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {

  const [pickedYear, setPickedYear] = useState('2020')

  const selectedFilterYear = (filteredYear) => {
    console.log('the selected filtered year is: ' + filteredYear)
    setPickedYear(filteredYear);
  }

  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={pickedYear} onFilterYear={selectedFilterYear} />
        <ExpenseItem 
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date} 
        />
        <ExpenseItem 
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date} 
        />
        <ExpenseItem 
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date} 
        />
        <ExpenseItem 
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date} 
        />
      </Card>
    </div>
  )
}

export default Expenses;