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
  const { checked, isChecked } = useState(false);
  useEffect(() => dispatch(actFetchPhongVe(params.id)), []);

  const danhSachGhe = data?.danhSachGhe;
  const thongTinPhim = data?.thongTinPhim;
  const chunkSize = 16;

  const chunkedGhe = [];
  if (danhSachGhe !== undefined) {
    for (let i = 0; i < danhSachGhe.length; i += chunkSize) {
      chunkedGhe.push(danhSachGhe.slice(i, i + chunkSize));
    }
  }

  return (
    <>
      {" "}
      <section>
        <div className="container">
          <h1>Chọn ghế</h1>
          <div>
            <div>
              <div>
                <img src={thongTinPhim?.hinhAnh} />
              </div>
              <div>
                <div>
                  <label>
                    Tên Phim: <span>"{thongTinPhim?.tenPhim}"</span>
                  </label>
                </div>
                <div>
                  <label>
                    Thời gian:{" "}
                    <span>
                      {thongTinPhim?.ngayChieu} - ({thongTinPhim?.gioChieu})
                    </span>
                  </label>
                </div>
                <div>
                  <label>
                    Tên Cụm Rạp: <span>{thongTinPhim?.tenCumRap}</span>
                  </label>
                </div>
                <div>
                  <label>
                    Địa Chỉ: <span>{thongTinPhim?.diaChi}</span>
                  </label>
                </div>
                <div>
                  <label>
                    Tên Rạp: <span>{thongTinPhim?.tenRap}</span>
                  </label>
                </div>

                <div>
                  <label>
                    Tên cụm rạp: <span>{thongTinPhim?.tenCumRap}</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="w3ls-reg">
              <ul className="template-seats">
                <li className="cat">
                  <label className="example">
                    {" "}
                    <input
                      type="checkbox"
                      className="seats"
                      value="Ghế đã chọn"
                      disabled="true"
                    />
                    <span>"Ghế đã chọn"</span>
                  </label>
                </li>
                <li className="cat">
                  {" "}
                  <label className="example">
                    {" "}
                    <input
                      type="checkbox"
                      className="seats"
                      value="Ghế chưa chọn"
                    />
                    <span>"Ghế chưa chọn"</span>
                  </label>
                </li>
                <li className="cat">
                  {" "}
                  <label className="example vip">
                    {" "}
                    <input
                      type="checkbox"
                      className="seats"
                      value="Ghế chưa chọn"
                    />
                    <span>"Ghế VIP chưa chọn"</span>
                  </label>
                </li>
              </ul>
              {/* seat availabilty list */}
              {/* seat layout */}
              <div
                className="seatStructure txt-center"
                style={{ overflowX: "auto" }}
              >
                <table id="seatsBlock">
                  <tbody>
                    {chunkedGhe.map((chunk, rowIndex) => (
                      <ul className="seat-list">
                        {chunk.map((chair) => {
                          return (
                            <li className="cat">
                              <label
                                className={chair.loaiGhe === "Vip" ? "vip" : ""}
                                style={{ marginBottom: "0px" }}
                              >
                                {/* <input
                              class="filter-chk"
                              type="checkbox"
                              value="rewards"
                              name="cardtypes"
                              data-cat-id="39"
                            /> */}
                                <input
                                  type="checkbox"
                                  className={"seats"}
                                  value={chair.tenGhe}
                                  disabled={chair.daDat}
                                  // onClick={handleChange}
                                  checked={checked}
                                />
                                <span>{chair.tenGhe}</span>
                              </label>
                            </li>
                          );
                        })}
                      </ul>
                    ))}
                  </tbody>
                </table>
                <div className="screen">
                  <p id="notification">
                    <h2
                      style={{
                        marginBottom: 0,
                        background: "#ff9800",
                        letterSpacing: 1,
                      }}
                    >
                      MÀN HÌNH CHÍNH
                    </h2>
                  </p>
                </div>
              </div>
              {/* //seat layout */}
              {/* details after booking displayed here */}
              <div
                className="displayerBoxes txt-center"
                style={{ overflowX: "auto" }}
              >
                {/* <Orders /> */}
              </div>
              {/* //details after booking displayed here */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
