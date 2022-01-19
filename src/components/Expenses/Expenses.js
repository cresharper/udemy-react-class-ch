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

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={pickedYear} onFilterYear={selectedFilterYear} />
        {filteredExpenses.map(expense => 
          <ExpenseItem
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date} 
          />
        )}
      </Card>
    </div>
  )
}

export default Expenses;