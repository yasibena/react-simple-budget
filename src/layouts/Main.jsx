// rrd imports
import { Outlet, useLoaderData } from 'react-router-dom';

// assets


// components
import Nav from '../components/Nav';

//  helper functions
import { fetchData } from '../helpers';

// loader
export function mainLoader() {
  const userName = fetchData('userName');
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout bg-transparent mix-blend-multiply ">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      {/* <img alt="" /> */}
    </div>
  );
};
export default Main;
