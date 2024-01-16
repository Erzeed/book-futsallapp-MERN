import { ToastContainer, Slide } from 'react-toastify';

const Toast = () => {
    return(
        <ToastContainer 
            position="top-center"
            autoClose={1000}
            hideProgressBar
            newestOnTop={false}
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            theme="light"
            transition= {Slide}
            style={{
                "width": "max-content",
                "fontSize": "15px",
            }}
        />
    )
}

export default Toast;