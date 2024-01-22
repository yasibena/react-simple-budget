

//helper action
// rrd imports
import { Form, Link } from 'react-router-dom';

// library imports
import { BanknotesIcon, TrashIcon } from '@heroicons/react/24/outline';

// helper functions
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from '../helpers';

const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);

  return (
    <div
      className="budget grid gap-4 mt-10 max-w-2xl rounded-xl p-9
      "
      style={{
        '--accent': color,
      }}
    >
      <div className="flex justify-between">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} میزان درآمد</p>
      </div>
      <progress
        max={amount}
        value={spent}
        className=" w-full rounded overflow-hidden appearance-none rounded-xl
        
       
        
        "
      >
        {formatPercentage(spent / amount)}
      </progress>
      <div className="flex justify-between">
        <small>{formatCurrency(spent)} خرج شده</small>
        <small>{formatCurrency(amount - spent)} باقی مانده</small>
      </div>
      {showDelete ? (
        <div className="flex-sm">
          <Form
            method="post"
            action="delete"
            onSubmit={(event) => {
              if (
                !window.confirm(
                 'آیا واقعا میخواهید هزینه مورد نظر حذف شود؟'
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit" className="budge-item flex justify-center item-center m-auto text-[#ffff] w-40 p-3 rounded text-base hover:outline hover:outline-3 hover:outline-offset-4 duration-100 ">
              <span>حذف درآمد</span>
              <TrashIcon width={20} className='mt-0.5' />
            </button>
          </Form>
        </div>
      ) : (
        <div className="budge-item flex justify-center item-center m-auto text-[#ffff] w-40 p-3 rounded text-base hover:outline hover:outline-3 hover:outline-offset-4 duration-100 ">
          <Link to={`/budget/${id}`} className="flex">
            <span>جزییات بیشتر</span>
            <BanknotesIcon width={20} className="flex mr-1 " />
          </Link>
        </div>
      )}
    </div>
  );
};
export default BudgetItem;
