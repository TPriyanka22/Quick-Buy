import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import updateStyles from "./quickbuy-update-address.module.scss";
import QuickbuyInputField from "@/components/QuickbuyInput";
import QuickbuyActionButton from "@/components/QuickbuyButton";
import { updateAddress } from "@/firebase/addresses";
// Validation schema for the address form using yup
const quickbuyAddressValidationSchema = yup.object().shape({
  title: yup
    .string()
    .required("* Address Title is required.")
    .min(2, "* Address Title is too short"),
  city: yup
    .string()
    .required("* Name of the  City is required.")
    .min(2, "* Name of the City is too short"),
  region: yup.string().required("* Region is required."),
  zipcode: yup.string().required("* Zip Code is required."),
  fullAddress: yup.string().required("* Address Line is required."),
});
export default function QuickbuyUpdateAddressModal({ addressData, onClose }) {
  const { id, title, fullAddress, zipcode, region, city } = addressData;
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(quickbuyAddressValidationSchema),
  });
  const onSubmit = (data) =>
    updateAddress({ id, ...data }).finally(() => window.location.reload(false));
  const handleModalClose = (event) => {
    if (event?.target?.id === "quickbuyModalContainer") onClose();
  };
  return (
    <div className={updateStyles.quickbuyModalContainer} id="quickbuyModalContainer" onClick={handleModalClose} >
      <div className={updateStyles.quickbuyModalContent}>
        <div className={updateStyles.quickbuyModalHeader}>
          <h4>Update Quickbuy Address</h4>
          <div onClick={onClose}>×</div>
        </div>
        <hr />
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", paddingTop: 30 }}
        >
          <div className={updateStyles.quickbuyFieldContainer}>
            <span>Address Title</span>
            <QuickbuyInputField name="title" noMargin register={register} placeholder="Home, Office, etc." defaultValue={title} error={errors.title} />
          </div>
          {errors.title && (
            <span className={updateStyles.quickbuyErrorMessage}>
              {errors.title.message}
            </span>
          )}
          <div className={updateStyles.quickbuyFieldContainer}>
            <span>City</span>
            <QuickbuyInputField
              name="city"
              noMargin
              register={register}
              defaultValue={city}
              placeholder="New York, London, etc."
              error={errors.city}
            />
          </div>
          {errors.city && (
            <span className={updateStyles.quickbuyErrorMessage}>
              {errors.city.message}
            </span>
          )}

          <div className={updateStyles.quickbuyFieldContainer}>
            <span>Region</span>
            <QuickbuyInputField
              name="region"
              noMargin
              register={register}
              defaultValue={region}
              placeholder="France, Italy, etc."
              error={errors.region}
            />
          </div>
          {errors.region && (
            <span className={updateStyles.quickbuyErrorMessage}>
              {errors.region.message}
            </span>
          )}

          <div className={updateStyles.quickbuyFieldContainer}>
            <span>Zip Code</span>
            <QuickbuyInputField
              name="zipcode"
              noMargin
              register={register}
              defaultValue={zipcode}
              placeholder="e.g., 10030"
              error={errors.zipcode}
            />
          </div>
          {errors.zipcode && (
            <span className={updateStyles.quickbuyErrorMessage}>
              {errors.zipcode.message}
            </span>
          )}

          <div className={updateStyles.quickbuyFieldContainer}>
            <span>Address Line</span>
            <QuickbuyInputField
              name="fullAddress"
              noMargin
              register={register}
              defaultValue={fullAddress}
              placeholder="123 Main Street, New York, NY 10030, etc."
              error={errors.fullAddress}
            />
          </div>
          {errors.fullAddress && (
            <span className={updateStyles.quickbuyErrorMessage}>
              {errors.fullAddress.message}
            </span>
          )}
          <QuickbuyActionButton type="submit" style={{ marginBottom: 0 }}>
            Update Quickbuy Address
          </QuickbuyActionButton>
        </form>
      </div>
    </div>

  );
}