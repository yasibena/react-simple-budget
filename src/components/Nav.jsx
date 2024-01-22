// rrd imports
import { Form, NavLink } from 'react-router-dom';

// library
import { TrashIcon } from '@heroicons/react/24/solid';

// assets


const Nav = ({ userName }) => {
  return (
    <nav className="flex justify-between items-center p-4  text-xl max-sm:text-base">
      <NavLink
        to="/"
        aria-label="Go to home"
        className="flex mr-4 p-3  rounded  hover:outline-[#4942E4]  hover:outline hover:outline-3 hover:outline-offset-4 duration-100  

        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-[#4942E4] font-bold flex justify-center align-center mt-1.5 ml-2 "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>

        <span className="font-bold">صفحه اصلی</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(event) => {
            if (!confirm('همه ی اطلاعات حذف شود؟')) {
              event.preventDefault();
            }
          }}
        >
          <div className="">
            <button
              type="submit"
              className="flex text-[#df6b62] rounded bg-[#f1d2d0] px-5 py-4
            hover:bg-[#df6b6296] border-2 border-[#df6b62]
            hover:outline-[#df6b62]  hover:outline hover:outline-3 hover:outline-offset-4 duration-100 hover:bg-[#df6b62] hover:text-[#ffff]
            "
            >
              <span className="flex ">حذف حساب کاربری </span>
              <TrashIcon
                width={22}
                className="flex justify-center align-center font-bold mt-1 mr-1   "
              />
            </button>
          </div>
        </Form>
      )}
    </nav>
  );
};
export default Nav;
