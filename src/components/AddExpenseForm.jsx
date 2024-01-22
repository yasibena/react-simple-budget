// react imports

import React from 'react';
import { useEffect, useRef } from 'react';

// rrd imports
import { useFetcher } from 'react-router-dom';

// library imports
import { PlusCircleIcon } from '@heroicons/react/24/solid';

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === 'submitting';

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      // clear form
      formRef.current.reset();
      // reset focus
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div
      className="grid gap-4 mt-10 max-w-2xl rounded-md p-9 shadow-xl  mb-20 ml-6 index-1 relative z-10
    before:border-2 before:absolute before:border-dashed before:-z-10
    before:inset-[0.55rem]  before:border-[#000] before:rounded-md flex-[1_1_48%] h-[70%] max-lg:h-[80%]
    
    "
    >
      <h2 className="text-2xl flex font-bold max-sm:text-base mt-0 ">
        اضافه کردن هزینه{' '}
        <span className="flex">
          خرج شده از
          {budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
        </span>{' '}
      </h2>
      <fetcher.Form method="post" className="grid gap-7 " ref={formRef}>
        <div className="flex gap-1  max-lg:grid">
          <div className="text-xl max-sm:text-base">
            <label htmlFor="newExpense" className="flex font-bold mb-2 ">
              نوع هزینه
            </label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="خرید نان"
              ref={focusRef}
              required
              className="px-2 py-2 rounded-md  outline-none border-2 border-[gray] focus:border-[#11009E] focus:border-3 
              max-lg:w-full
              "
            />
          </div>
          <div className="text-xl  max-sm:text-base">
            <label
              htmlFor="newExpenseAmount"
              className="flex font-bold mb-2 text-xl "
            >
              مقدار
            </label>
            <input
              type="number"
              step="0.01"
              inputMode="decimal"
              name="newExpenseAmount"
              id="newExpenseAmount"
              placeholder="200,000"
              required
              className="px-2 py-2 rounded-md  outline-none border-2 border-[gray] focus:border-[#11009E] focus:border-3 
              max-lg:w-full
              "
            />
          </div>
        </div>
        <div className="grid-xs" hidden={budgets.length === 1}>
          <label htmlFor="newExpenseBudget" className="font-bold mb-4">
            لیست درآمدها
          </label>
          <select
            name="newExpenseBudget"
            id="newExpenseBudget"
            required
            className='px-2 py-2 rounded-md  outline-none border-2 border-[gray] focus:border-[#11009E] focus:border-3 
            max-lg:w-full 
             
              "'
          >
            {budgets
              .sort((a, b) => a.createdAt - b.createdAt)
              .map((budget) => {
                return (
                  <option key={budget.id} value={budget.id}>
                    {budget.name}
                  </option>
                );
              })}
          </select>
        </div>
        <input type="hidden" name="_action" value="createExpense" />
        <button
          type="submit"
          className="flex w-48 px-2 py-3 bg-[#000] text-[#fff] rounded-md text-base
          hover:outline-[#000]  hover:outline hover:outline-3 hover:outline-offset-4 duration-100 max-sm:text-base text-center item-center justify-center
          "
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span>درحال ثبت</span>
          ) : (
            <>
              <span>اضافه کردن هزینه</span>
              <PlusCircleIcon width={20} className="flex mt-0.5 mr-1 " />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};
export default AddExpenseForm;
