import React, { Component } from "react";
import MovieItem from "./MovieItem";
import GetLich from "../_components/GetLich";
import { actFetchListMovie } from "./duck/actions";
import { connect } from "react-redux";

class ListMoviePage extends Component {
  componentDidMount() {
    this.props.fetchListMovie();
  }

  renderListMovie = () => {
    const { data, loading } = this.props;
    if (loading) return <div>loading...</div>;
    return data?.map((movie) => <MovieItem key={movie.maPhim} movie={movie} />);
  };

  render() {
    return (
      <div className="container">
        <GetLich />
        <h3>ListMoviePage</h3>
        <div className="row">{this.renderListMovie()}</div> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListMovie: () => {
      dispatch(actFetchListMovie());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
