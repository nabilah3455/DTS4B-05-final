import React, { createContext, useState } from "react";
import { useHistory } from "react-router";
import Cookies from "js-cookie";
import swal from "sweetalert";

export const MyDashboardContext = createContext();

export const DashboardProvider = (props) => {
  const [loading, setLoading] = useState(false);


  const functions = {
    submitAJB,
    addPenjual,
    addPembeli,
    addDokumenAjb,
    addMeterai,
    getDokumenAjb,
    dokumenAjb,
    getDokumenAjbStamp,
    template,
  };

  return (
    <MyDashboardContext.Provider
      value={{
        ajb,
        setAjb,
        inputAjb,
        setInputAjb,
        ttdDigital,
        setTtdDigital,
        meterai,
        setMeterai,
        status,
        setStatus,
        otpModal,
        setOtpModal,
        btnConfirm,
        setBtnConfirm,
        confirmModal,
        setConfirmModal,
        functions,
        loadingFile,
        setLoadingFile,
        cekKtp,
        dataNik,
        setDataNik,
        warning,
        setWarning,
        dokTemplate,
        setDokTemplate,
        penjual,
        setPenjual,
      }}
    >
      {props.children}
    </MyDashboardContext.Provider>
  );
};
