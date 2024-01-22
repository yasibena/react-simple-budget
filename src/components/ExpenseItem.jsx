import React from 'react';
// helper imports
import {
  formatCurrency,
  formatDateToLocaleString,
  getAllMatchingItems,
} from '../helpers';

//persian date
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import DateObject from 'react-date-object';

//rrd imports
import { Link, useFetcher } from 'react-router-dom';

//icons
import { TrashIcon } from '@heroicons/react/24/solid';

const ExpenseItem = ({ expense, showBudget }) => {
  const fetcher = useFetcher();
  const dateToShamsi = formatDateToLocaleString(expense.createdAt);
  const date = new DateObject({
    date: new Date(dateToShamsi),
    // date: new Date(),
    calendar: persian,
  });

  const budget = getAllMatchingItems({
    category: 'budgets',
    key: 'id',
    value: expense.budgetId,
  })[0];

  const { color } = budget;

  return (
    <>
      <td className="text-center text-[-0.5rem] ">{expense.name}</td>
      <td className="text-center text-[-0.5rem]">{expense.amount}</td>
      <td className="text-center text-[-0.5rem] ">{date.format()}</td>
      {showBudget && (
        <td>
          <Link
            to={`/budget/${budget.id}`}
            style={{
              '--accent': color,
            }}
            className="bg-expense-name rounded-full p-4"
          >
            {budget.name}
          </Link>
        </td>
      )}
      <td>
        <td>
          <fetcher.Form method="post">
            <input type="hidden" name="_action" value="deleteExpense" />
            <input type="hidden" name="expenseId" value={expense.id} />
            <button
              type="submit"
              className="flex text-[#df6b62] rounded bg-[#f1d2d0] px-3 py-2
              hover:bg-[#df6b6296] border-2 border-[#df6b62]
              hover:outline-[#df6b62]  hover:outline hover:outline-3 hover:outline-offset-4 duration-100 hover:bg-[#df6b62] hover:text-[#ffff]
              "
              aria-label={`آیا ${expense.name} حذف شود؟`}
            >
              <TrashIcon width={20} />
            </button>
          </fetcher.Form>
        </td>
      </td>
    </>
  );
};
export default ExpenseItem;
