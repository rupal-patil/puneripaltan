"use client"
import { Formik } from 'formik';
import { createContext } from 'react';
import * as Yup from "yup";
import OrangeButton from './OrangeButton';
import { Exo } from 'next/font/google';
const exoReg=Exo({
    variable:"exo-reg",
    subsets:["latin"],
    weight:"400"
})
const Form=()=>{
    const schema=Yup.object({
        email:Yup.string().email().required("Email Required"),
    })
    return(
        <>
        <Formik
       initialValues={{ email: '' }}
       validationSchema={schema}
       onSubmit={(values, { setSubmitting, resetForm }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           resetForm();
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit} className='flex gap-8'>
          <div className='flex flex-col'>
          <div className='bg-white w-[200px] md:w-[300px] lg:w-[300px] h-full flex flex-col justify-end items-start overflow-hidden '>
          <input
             type="email"
             name="email"
             placeholder='Enter your email-id'
             className={`w-full outline-none tracking-[1px] border-b-2 border-gray-300 px-2 pb-3 skew-x-[15deg] text-gray-300 focus:text-black ${exoReg.className}`}
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
          </div>
           <p className='text-red-500 mt-[-5px]'>{errors.email && touched.email && errors.email}</p>
          </div>
          <div>
          <div disabled={isSubmitting} type="submit" >
           <OrangeButton title={"Go"} width={70} padding={10}  />
           </div>
          </div>
           
         </form>
       )}
     </Formik>
        </>
    )
}
export default Form;