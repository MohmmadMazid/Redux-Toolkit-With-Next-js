"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsData } from "../ReduxToolkitNextjs/feature/slice";
import MyLoader from "../components/MyLoader";

const api_data = () => {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.todo.postsData);
  const isLoading = useSelector((state) => state.todo.isLoading);
  const error = useSelector((state) => state.todo.error);
  console.log(isLoading);
  console.log(error);
  console.log(postData);
  useEffect(() => {
    dispatch(postsData());
  }, []);
  return (
    <div>
      <div>
        <h1>
          Fetching Api Data Using createAsyncThunk in next js and redux-toolkit
        </h1>
      </div>
      <div>
        {isLoading ? (
          <MyLoader />
        ) : (
          postData.length > 0 &&
          postData.map((item) => {
            return (
              <div key={item.id}>
                <h5>Title: -{item.title}</h5>
                <h4>Body: -{item.body}</h4>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default api_data;
