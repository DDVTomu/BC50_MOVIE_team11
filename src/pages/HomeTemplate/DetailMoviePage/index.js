import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { actFetchDetailMovie } from "./duck/actions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "components/Loader";
import moment from "moment/moment";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
function DetailMoviePage(props) {
  const params = useParams();
  const loading = useSelector((state) => state.detailMovieReducer.loading);
  const data = useSelector((state) => state.detailMovieReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    // props.fecthData(params.id);
    dispatch(actFetchDetailMovie(params.id));
  }, []);

  if (loading) return <Loader />;
  return (
    <>
      <div className="container">
        <h3>DetailMoviePage</h3>
        <div style={{ display: "flex" }}>
          <div>
            <img src={data && data.hinhAnh} />
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>Tên Phim</td>
                <td>{data && data.tenPhim}</td>
              </tr>
              <tr>
                <td>Mô tả</td>
                <td>{data && data.moTa}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <section>
        <div className="container">
          <Tabs>
            <TabList>
              {" "}
              {data &&
                data?.heThongRapChieu.map((rap, key) => {
                  return (
                    <Tab>
                      <img src={rap.logo} width={64} height={64} />
                      <span>{rap.tenHeThongRap}</span>
                    </Tab>
                  );
                })}
            </TabList>

            {data &&
              data?.heThongRapChieu.map((rap, key) => {
                return (
                  <TabPanel>
                    {rap.cumRapChieu.map((cumRap, key) => {
                      return (
                        <>
                          <h3 key={key}>{cumRap.tenCumRap}</h3>
                          <p>Ngày chiếu</p>
                          <ul>
                            {cumRap?.lichChieuPhim.map((lichChieu, key) => {
                              return (
                                <li key={key}>
                                  <a href={`/phongve/${lichChieu.maLichChieu}`}>
                                    <p>
                                      {moment(
                                        lichChieu.ngayChieuGioChieu
                                      ).format("MM/DD/YYYY")}
                                    </p>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </>
                      );
                    })}
                  </TabPanel>
                );
              })}
          </Tabs>
        </div>
      </section>
    </>
  );
}

export default DetailMoviePage;

// const mapStateToProps = (state) => {
//   return {
//     loading: state.detailMovieReducer.loading,
//     data: state.detailMovieReducer.data,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fecthData: (id) => {
//       dispatch(actFetchDetailMovie(id));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage);
