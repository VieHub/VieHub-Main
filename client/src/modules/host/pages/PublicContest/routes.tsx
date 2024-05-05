// import Host from "./pages/host";
import ContestForm from "./ContestForm";
import SecondPage from "./ContestForm2";
import ThirdPage from "./payment.tsx";
export default [
    
    {
        path: "ContestForm",
        element: <ContestForm />,
        name: "VieHub",
    },
    {
        path: "SecondPage",
        element: <SecondPage />,
        name: "VieHub",
    },
    {
        path: "ThirdPage",
        element: <ThirdPage />,
        name: "VieHub",
    },
];
