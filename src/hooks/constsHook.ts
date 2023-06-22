import React from "react";
import { componentsConsts } from "../data/consts";

const useGetConsts = (name: string) => {
  const { title, subtitle } =
    componentsConsts.find((next) => next.name === name) || {};

  return { title, subtitle };
};

export default useGetConsts;
