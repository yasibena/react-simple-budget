
import { Form } from 'react-router-dom';

// library
import { UserPlusIcon } from '@heroicons/react/24/solid';

// assets

const Intro = () => {
  return (
    <div
      className=" grid xl:grid-cols-2  mt-6 
    grid grid-cols-1 
    mr-32
    "
    >
      <div
        className="grid gap-9 grid-cols-1 grid-row-4 md:w-3/5 
       justify-center items-center lg:w-full md:m-auto "
      >
        <h1 className="text-5xl max-sm:text-4xl">
          <span className="text-[#4942E4]">
            {' '}
            هزینه هاتو
            <br />
          </span>{' '}
          محاسبه کن
        </h1>
        <p className="text-3xl max-sm:text-2xl">
          با مدیریت هزینه ها
          <br /> پس انداز خودتو افزایش بده.
        </p>
        <Form method="post" className="">
          <input
            type="text"
            name="userName"
            className=" rounded p-2 text-xl border-2 border-[#000]
            transition delay-50
            focus:outline-none  focus:border-[#4942E4] focus:border-2
            "
            required
            placeholder="نام شما چیست؟"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button
            type="submit"
            className="flex rounded bg-[#000] text-[#ffff] max-sm:text-base
           px-9 py-4 text-xl mt-7 ease-in duration-100 
           hover:outline-[#000]  hover:outline hover:outline-3 hover:outline-offset-4
           "
          >
            <span>ساخت اکانت</span>
            <UserPlusIcon className="mt-1 mx-1" width={20} />
          </button>
        </Form>
      </div>
      <img
        src="https://thumbs.dreamstime.com/z/make-money-writing-blog-online-monetize-content-get-income-earning-affiliate-links-concept-success-freelance-woman-blogger-272238960.jpg?w=992"
        alt="Person with money"
        width="600"
        className="mt-4 mb-4 "
      />
    </div>
  );
};
export default Intro;
