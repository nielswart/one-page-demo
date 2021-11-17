import { Box, Button } from "@theme-ui/components";
import React, { useContext, useState } from "react";
import Contact from "./contact";
import Delivery from "./delivery";
import { useFormik } from "formik";
import * as Yup from "yup";
import OrderContext from "../../../context/order-context";

const Forms = () => {
  const { contact, delivery, setDelivery, setContact } = useContext(
    OrderContext
  );
  const [isValid, setIsValid] = useState({
    contact: false,
    delivery: false,
  });
  const formik = useFormik({
    initialValues: {
      contact: {
        first_name: contact.first_name,
        last_name: contact.last_name,
        email: contact.email,
        phone: contact.phone,
      },
      delivery: {
        address_1: delivery.address_1,
        postal_code: delivery.postal_code,
        city: delivery.city,
        country_code: delivery.country_code,
        shipping_option: delivery.shipping_option,
      },
    },
    validationSchema: Yup.object({
      contact: Yup.object({
        first_name: Yup.string().required("Required"),
        last_name: Yup.string().required("Required"),
        email: Yup.string()
          .email("Please provide a valid email address")
          .required("Required"),
        phone: Yup.string().optional(),
      }),
      delivery: Yup.object({
        address_1: Yup.string().required("Required"),
        postal_code: Yup.string().required("Required"),
        city: Yup.string().required("Required"),
        country_code: Yup.string().required("Required"),
        shipping_option: Yup.string().required("Required"),
      }),
    }),
    onSubmit: (values) => {
      setIsValid({ delivery: true, contact: true });
      setDelivery(values.delivery);
      setContact(values.contact);
    },
  });
  return (
    <Box>
      <Contact formik={formik} isValid={isValid} setIsValid={setIsValid} />
      <Box
        sx={{
          height: "1px",
          bg: "cool",
          width: "100%",
          my: "1em",
        }}
      />
      <Delivery formik={formik} isValid={isValid} setIsValid={setIsValid} />
      <Box
        sx={{
          height: "1px",
          bg: "cool",
          width: "100%",
          my: "1em",
        }}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          formik.submitForm();
        }}
        variant="cta"
        sx={{
          width: "100%",
        }}
      >
        Go to payment
      </Button>
    </Box>
  );
};

export default Forms;
