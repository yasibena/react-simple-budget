
import { useRouteError,Link,useNavigate } from 'react-router-dom';
import {HomeIcon,ArrowUturnLeftIcon} from '@heroicons/react/24/solid'

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  //call that history with navigate
  console.log(error, 'errro');

  return (
    <>
      <div className="grid justify-center align-center gap-10 h-full ">
        <h1>مشکلی پیش آمده است!</h1>
        <p>{error.message || error.statusText}</p>
        <div className=" ">
          <button
            onClick={() => navigate(-1)}
            className="flex rounded bg-[#000] text-[#ffff] text-sm max-sm:text-sm
           px-9 py-4 text-xl mt-7 ease-in duration-100 
           hover:outline-[#000]  hover:outline hover:outline-3 hover:outline-offset-4
           "
          >
            <ArrowUturnLeftIcon width={20} />
            <span>برگشت </span>
          </button>
          <Link
            to="/"
            className="flex rounded bg-[#000] text-[#ffff] text-sm max-sm:text-sm
           px-9 py-4 text-xl mt-7 ease-in duration-100 
           hover:outline-[#000]  hover:outline hover:outline-3 hover:outline-offset-4
           "
          >
            <HomeIcon width={20} />
            <span>برو به صفحه اصلی</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error;

