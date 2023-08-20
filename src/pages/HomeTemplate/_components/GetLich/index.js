import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { actFetchLichChieu } from "./duck/actions";
import { connect } from "react-redux";
import moment from "moment/moment";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
export default function GetLich() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.listLichChieuReducer);
  useEffect(() => dispatch(actFetchLichChieu()), []);
  return (
    <div>
      Hello
      <Tabs>
        <TabList>
          {data?.map((tenRap, key) => {
            return (
              <Tab>
                <img src={tenRap?.logo} width={64} height={64}></img>
                <span> {tenRap?.tenHeThongRap}</span>
              </Tab>
            );
          })}
        </TabList>

        {data?.map((tenRap, key) => {
          return (
            <TabPanel>
              <Tabs>
                <TabList>
                  {tenRap?.lstCumRap.map((cumRap, key) => {
                    return (
                      <Tab>
                        {" "}
                        <h3 key={key}>{cumRap.tenCumRap}</h3>
                      </Tab>
                    );
                  })}
                </TabList>
                {tenRap?.lstCumRap.map((cumRap, key) => {
                  return (
                    <TabPanel>
                      {cumRap?.danhSachPhim.map((phim, key) => {
                        return (
                          <>
                            <h4>{phim.tenPhim}</h4>
                            <p>Ngày chiếu</p>
                            <ul>
                              {phim?.lstLichChieuTheoPhim.map(
                                (lichChieu, key) => {
                                  return (
                                    <li key={key}>
                                      <a
                                        href={`/phongve/${lichChieu.maLichChieu}`}
                                      >
                                        <p>
                                          {moment(
                                            lichChieu.ngayChieuGioChieu
                                          ).format("MM/DD/YYYY HH:mm")}
                                        </p>
                                      </a>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </>
                        );
                      })}
                    </TabPanel>
                  );
                })}
              </Tabs>
            </TabPanel>
          );
        })}
      </Tabs>
    </div>
  );
}
