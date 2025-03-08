"use client";
import * as React from "react";
import { X as Close } from "react-feather";
import { Toaster, ToastBar, toast } from "react-hot-toast";

function ToastWithDismissal() {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={true}
      toastOptions={{
        style: {
          padding: "1.5rem",
          borderRadius: "0.7rem",
        },
        duration: 3000,
        removeDelay: 1000,
      }}
      containerStyle={{
        right: 40,
        bottom: 40,
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== "loading" && (
                <button onClick={() => toast.dismiss(t.id)}>{<Close />}</button>
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
}

export default ToastWithDismissal;
