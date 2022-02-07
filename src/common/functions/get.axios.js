import { the } from "../objects/the";
import { is } from "../objects/is";
import axios from "axios";
import { allow } from "@toolz/allow-react";

export const getAxios = () => {
  const call = async (method = "", url = "", data = {}, headers = {}) => {
    allow
      .oneOf(method, the.method)
      .aString(url, is.not.empty)
      .anObject(data)
      .anObject(headers);
    let response;
    if (method === the.method.get) {
      response = await axios({
        headers,
        method,
        params: data,
        url,
        // eslint-disable-next-line no-undef
      }).catch((error) => Promise.resolve(error));
    }
    return response;
  };

  return {
    call,
  };
};
