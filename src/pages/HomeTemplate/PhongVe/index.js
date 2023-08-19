import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { actFetchPhongVe } from "./duck/actions";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

export default function PhongVe() {
  const params = useParams();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.listPhongVeReducer);
  useEffect(() => dispatch(actFetchPhongVe(params.id)), []);
  console.log(data);
  return <div></div>;
}
