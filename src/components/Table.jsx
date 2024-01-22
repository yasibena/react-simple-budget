

// component import
import ExpenseItem from './ExpenseItem';

const Table = ({ expenses, showBudget = true }) => {
  return (
    <div className="flex justify-between ">
      <table className="text-center w-full ">
        <thead className="">
          <tr className="font-bold mb-8">
            {[' هزینه', 'مقدار', 'تاریخ', showBudget ? 'درآمد' : '', ''].map(
              (i, index) => (
                <th key={index} className="p-4">
                  {i}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="nth mx-4 my-3 ">
              <ExpenseItem expense={expense} showBudget={showBudget} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
