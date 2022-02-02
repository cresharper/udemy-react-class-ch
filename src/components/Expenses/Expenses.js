import React, { useState } from 'react';

import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {

  const [pickedYear, setPickedYear] = useState('')

  const selectedFilterYear = (filteredYear) => {
    setPickedYear(filteredYear);
  }

  let filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === pickedYear;
  });

  if (pickedYear === '') {
    filteredExpenses = props.items;
  }

  return(
    <div className='current-expenses'>
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