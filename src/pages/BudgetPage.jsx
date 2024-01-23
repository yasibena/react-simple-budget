import React from 'react';

// rrd imports
import { useLoaderData } from 'react-router-dom';

// library
import { toast } from 'react-toastify';


// components
import AddExpenseForm from '../components/AddExpenseForm';
import BudgetItem from '../components/BudgetItem';
import Table from '../components/Table';

// helpers
import { createExpense, deleteItem, getAllMatchingItems } from '../helpers';

// loader
export async function budgetLoader({ params }) {
  const budget = await getAllMatchingItems({
    category: 'budgets',
    key: 'id',
    value: params.id,
  })[0];

  const expenses = await getAllMatchingItems({
    category: 'expenses',
    key: 'budgetId',
    value: params.id,
  });

  if (!budget) {
    throw new Error('درآدمد مورد نظر پیدا نشد!');
  }

  return { budget, expenses };
}

// action
export async function budgetAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === 'createExpense') {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success(`هزینه ${values.newExpense} اضافه شد!`);
    } catch (e) {
      throw new Error('هنگام اضافه کردن هزینه موردنظر مشکلی پیش آمد!.');
    }
  }

  if (_action === 'deleteExpense') {
    try {
      deleteItem({
        key: 'expenses',
        id: values.expenseId,
      });
      return toast.success('هزینه مورد نظر حذف شد.!');
    } catch (e) {
      throw new Error('هنگام حذف هزینه مورد نظر م مشکلی پیش آمد.');
    }
  }
}

const BudgetPage = () => {
  const { budget, expenses } = useLoaderData();

  const data = expenses.map((expense) => {
    return;
    ({
      id: expense.id,
      value: expense.amount,
      label: expense.name,
    });
  });

  const expensesInArr = expenses.map((expense) => {
    return { label: expense.name, value: expense.amount };
  });

  console.log(expensesInArr, 'expensesInArrexpensesInArr');
  return (
    <div
      className="mr-10 mb-20"
      style={{
        '--accent': budget.color,
      }}
    >
      <h1 className="h2">
        <span className="accent text-3xl font-bold"> {budget.name}</span>
      </h1>
      <div className="flex-lg">
        <BudgetItem budget={budget} showDelete={true} />
        <AddExpenseForm budgets={[budget]} />
      </div>
      {expenses && expenses.length > 0 && (
        <div className="block  justify-around  ">
          <div>
            <h2 className=" accent text-2xl font-bold  my-5">
              <span>مبالغ خرج شده از {budget.name}</span>
            </h2>
            <Table expenses={expenses} showBudget={false} />
          </div>

       
        </div>
      )}

      {/* mui */}

      {/* {expenses.length > 0 && ( */}

      {/* )} */}
    </div>
  );
};
export default BudgetPage;
