import CertificateSelection from "./pages/CertificateSelection";
import CertificateForm from "./pages/CertificateForm";
import CertificatePayment from "./pages/CertificatePayment";

export const routes = [
  {
    path: "/sycret",
    element: <CertificateSelection />,
  },

  { path: "/form", element: <CertificateForm /> },

  { path: "/payment", element: <CertificatePayment /> },
];
