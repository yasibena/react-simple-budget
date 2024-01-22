// rrd import
import { redirect } from "react-router-dom";

// library
import { toast } from "react-toastify";

// helpers
import { deleteItem, getAllMatchingItems } from "../helpers";

export function deleteBudget({ params }) {
  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });

    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });

    associatedExpenses.forEach((expense) => {
      deleteItem({
        key: "expenses",
        id: expense.id,
      });
    });

    toast.success("درآمد مورد نظر با موفقیت حذف شد!");
  } catch (e) {
    throw new Error("هنگاام حذف درآمد مشکلی پیش آمد.");
  }
  return redirect("/");
}