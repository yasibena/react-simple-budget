// reacts
import { useEffect, useRef } from 'react';
import React from 'react';
// rrd imports
import { Form, useFetcher } from 'react-router-dom';

// library imports
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';

const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === 'submitting';

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div
      className="grid gap-4 mt-10 max-w-2xl rounded-md p-9 shadow-xl  bg-[#ffff]  mb-20 ml-6 index-1 relative z-10
    before:border-2 before:absolute before:border-dashed before:-z-10
    before:inset-[0.55rem]  before:border-[#000] before:rounded-md flex-[1_1_48%]
    "
    >
      <h2 className="text-2xl flex font-bold max-sm:text-xl mt-2">
        اضافه کردن درآمد
      </h2>
      <fetcher.Form method="post" className="grid gap-7 " ref={formRef}>
        <div className=" text-xl  max-sm:text-base">
          <label htmlFor="newBudget" className="flex font-bold mb-2 ">
            {' '}
            نوع درآمد{' '}
          </label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="حقوق ماهیانه"
            required
            ref={focusRef}
            className="px-2 py-2 rounded-md w-full outline-none border-2 border-[gray] focus:border-[#11009E] focus:border-3 w-full"
          />
        </div>
        <div className="text-xl max-sm:text-base">
          <label htmlFor="newBudgetAmount" className="flex font-bold mb-2 ">
            میزان درآمد
          </label>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="3,000,000 میلیون تومان"
            required
            inputMode="decimal"
            className="flex px-2 py-2 rounded-md outline-none border-2 border-[gray] focus:border-[#11009E] focus:border-3 w-full"
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
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
              <span> اضافه کردن درآمد </span>
              <CurrencyDollarIcon width={20} className="flex mt-0.5 mr-1" />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};
export default AddBudgetForm;
