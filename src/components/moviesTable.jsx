import React, {Component} from "react";
import Like from "./common/like";
import Table from "./common/table";
import {Link} from "react-router-dom";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      lebel: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    }, {
      path: "genre.name",
      lebel: "Genre"
    }, {
      path: "numberInStock",
      lebel: "Stock"
    }, {
      path: "dailyRentalRate",
      lebel: "Rate"
    }, {
      key: "like",
      lebel: "Like",
      content: movie => (<Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>)
    }, {
      key: "action",
      lebel: "Action",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm">
          Delete
        </button>
      )
    }
  ];
  render() {
    const {movies, onSort, sortColumn} = this.props;
    return (<Table
      columns={this.columns}
      onSort={onSort}
      sortColumn={sortColumn}
      data={movies}/>);
  }
}

export default MoviesTable;
