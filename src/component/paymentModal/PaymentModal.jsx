import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function PaymentModal({isOpen, setIsOpen, price}) {


  function closeModal() {
    setIsOpen(false)
  };
const launchRazorPay=()=>{
    let options={
        key:"rzp_test_wDifFZjMUwGZmh",
        amount: price * 100,
        currency:"INR",
        name:"book my show clone",
        description:"movie purchase or rent",
        image:"https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler:()=> {
        setIsOpen(false);
        alert("Payment Done"); 
    },
        theme:{  color: "#c4242d" },
};
       let razorPay=new window.Razorpay(options);
           razorPay.open();
} ;
  return (
    <>
      

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto z-50"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  please make a payment
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                   click on a below button to make a payment
                  </p>
                </div>

                <div className="w-full mt-4">
                <button
                    type="button"
                    className="w-full inline-flex justify-center px-4 py-2 mb-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={launchRazorPay}
                  >
                    pay₹{price}
                  </button>  <button
                    type="button"
                    className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                   cancel Payment
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
