

// rrd imports
import { Link, useLoaderData } from 'react-router-dom';

// library imports
import { toast } from 'react-toastify';

// components
import Intro from '../components/Intro';
import AddBudgetForm from '../components/AddBudgetForm';
import AddExpenseForm from '../components/AddExpenseForm';
import BudgetItem from '../components/BudgetItem';
import Table from '../components/Table';

//  helper functions
import {
  createBudget,
  createExpense,
  deleteItem,
  fetchData,
  waait,

} from '../helpers';

// loader
export function dashboardLoader() {
  const userName = fetchData('userName');
  const budgets = fetchData('budgets');
  const expenses = fetchData('expenses');
  return { userName, budgets, expenses };
}

// action
export async function dashboardAction({ request }) {
  await waait();

  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // new user submission
  if (_action === 'newUser') {
    try {
      localStorage.setItem('userName', JSON.stringify(values.userName));
      return toast.success(` ${values.userName}خوش اومدی`);
    } catch (e) {
      throw new Error('هنگام ساخت اکانت شما مشکلی پیش آمد.');
    }
  }

  if (_action === 'createBudget') {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success('Budget created!');
    } catch (e) {
      throw new Error('هنگام اضافه کردن درآمد شما مشکلی پیش آمد.');
    }
  }

  if (_action === 'createExpense') {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success(`Expense ${values.newExpense} created!`);
    } catch (e) {
      throw new Error('هنگام اضافه کردن هزینه شما مشکلی پیش آمد.');
    }
  }

  if (_action === 'deleteExpense') {
    try {
      deleteItem({
        key: 'expenses',
        id: values.expenseId,
      });
      return toast.success('هزینه حذف شد!');
    } catch (e) {
      throw new Error('هنگام حذف کردن درآمد شما مشکلی پیش آمد.');
    }
  }
}

const Dashboard = () => {
  const { userName, budgets, expenses } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="grid gap-6 mr-5 mb-20">
          <h1 className="text-5xl max-sm:text-3xl">
            خوش اومدی,{' '}
            <span className="accent text-[#4942E4]">{userName} جان</span>
          </h1>
          <div className="">
            {budgets && budgets.length > 0 ? (
              <div className="grid">
                <div className=" flex flex-row max-lg:grid">
                  <AddBudgetForm />
                  <AddExpenseForm budgets={budgets} />
                </div>
                <h2 className="text-3xl text-bold">درآمدهای موجود</h2>
                <div
                  className="grid gap-4 mt-10 max-w-2xl rounded-md p-9  mb-20 ml-6 index-1 relative
    "
                >
                  {budgets.map((budget) => (
                    <BudgetItem key={budget.id} budget={budget} />
                  ))}
                </div>
                {expenses && expenses.length > 0 && (
                  <div className="grid-md">
                    <h2 className="text-2xl font-bold mb-8">هزینه های موجود</h2>
                    <Table
                      expenses={expenses
                        .sort((a, b) => b.createdAt - a.createdAt)
                        .slice(0, 8)}
                    />
                    {expenses.length > 8 && (
                      <Link to="expenses" className="btn btn--dark">
                        دیدن همه هزینه ها
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="grid gap-2 text-2xl max-sm:text-xl">
                <p className=" ">
                  {' '}
                  با مدیریت هزینه ها پس انداز خودتو افزایش بده.
                </p>
                <p className=" ">
                  درآمدتو اضافه کن تا مدیریت هزینه ها زودتر شروع بشه!
                </p>
                <AddBudgetForm />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};
export default Dashboard;
