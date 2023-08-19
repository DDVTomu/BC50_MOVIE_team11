import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { actFetchLichChieu } from "./duck/actions";
import { connect } from "react-redux";

export default function GetLich() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.listLichChieuReducer);
  useEffect(() => dispatch(actFetchLichChieu()), []);
  return (
    <div>
      Hello
      {data?.map((tenRap, key) => {
        return tenRap?.lstCumRap.map((cumRap, key) => {
          return (
            <>
              <h1>{cumRap.tenCumRap}</h1>
              {cumRap?.danhSachPhim.slice(0, 6).map((phim, key) =>
                phim?.lstLichChieuTheoPhim.map((xuatChieu, key) => (
                  <a href={`/phongve/${xuatChieu.maLichChieu}`}>
                    <h1>Phim</h1>
                  </a>
                ))
              )}
            </>
          );
        });
      })}
    </div>
  );
}
