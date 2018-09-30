import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseItem = props => {
  return (
    <tr className="expenses-list__item">
      <td>
        <Link className="expenses-list__item-link" to={`/edit/${props.id}`}>
          <h3 className="expenses-list__item-description">{props.description}</h3>
          <p className="expenses-list__item-date">{moment(props.createdAt).format("MMM Do, YYYY")}</p>
        </Link>
      </td>
      <td>
        <p className="expenses-list__item-amount">{numeral(props.amount).format("$0,0.00")}</p>
      </td>
    </tr>
  );
};

export default ExpenseItem;
