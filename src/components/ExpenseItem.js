import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseItem = props => {
  return (
    <tr className="expenses-list__item">
      <td>
        <Link className="expenses-list__item-description" to={`/edit/${props.id}`}>
          <h3>{props.description}</h3>
        </Link>
        <p className="expenses-list__item-date">{moment(props.createdAt).format("MMM Do, YYYY")}</p>
      </td>
      <td>
        <p className="expenses-list__item-amount">{numeral(props.amount).format("$0,0.00")}</p>
      </td>
    </tr>
  );
};

export default ExpenseItem;
