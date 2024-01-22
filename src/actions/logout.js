// rrd imports
import { redirect } from 'react-router-dom';

// library
import { toast } from 'react-toastify';

// helpers
import { deleteItem } from '../helpers';

export async function logoutAction() {
  // delete the user
  deleteItem({
    key: 'userName',
  });
  deleteItem({
    key: 'budgets',
  });
  deleteItem({
    key: 'expenses',
  });
  toast.success('حساب کاربری شما حذف شد!');
  // return redirect
  return redirect('/');
}
