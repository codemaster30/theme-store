import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import useAxiosSecure from "../useSecureApi";
import { useState } from "react";

const usePostMutate = (route, onSuccess = () => {}, onError = () => {}) => {
  const Axios = useAxiosSecure();
  const token = Cookies.get("token");
  const queryClient = useQueryClient();
  const [error, setError] = useState(null);
  const { mutate, isPending } = useMutation({
    mutationFn: (obj) =>
      Axios.post(route, obj, {
        headers: {
          Authorization: token,
        },
      }),
    onSuccess: (mutatedData) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      console.log(mutatedData);
      onSuccess(mutatedData);
    },

    onError: (err) => {
      console.log(err);
      onError(err);
      setError(err);
    },
  });

  return { mutate, error, setError, isPending };
};

export default usePostMutate;
