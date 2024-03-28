'use client';
import InputMask from 'react-input-mask';
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from 'react-toastify';

type FormData = {
    fullName: string;
    email: string;
    position: string;
    phone: string;
    formText: string;
    isConfirmed: boolean
  }

const CareerForm:React.FC = () => {
    // const [isConfirmed, setIsConfirmed] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<FormData>();
      const onSubmit: SubmitHandler<FormData> = (data) => { localStorage.setItem('careerFormValues', JSON.stringify(data));
      toast('Your message has been sent');
      reset();
      };
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[16px] xl:gap-[36px] ">
          <div className="flex flex-col gap-[16px] md:flex-row md:gap-[20px] xl:gap-[24px]">            
            <div className="flex flex-col gap-[16px] xl:gap-[24px] md:w-[221px]  xl:w-[283px] ">
              <div className="relative">
                <label className={`label-form  ${errors.fullName ? 'text-red-500' : 'text-white'} xl:mb-[4px] `}>Full name</label>
                <input type="text" {...register('fullName', {required:'Full name is required', pattern: {value:/^[а-яА-Яa-zA-Z\s]*$/, message: 'Incorrect name'}, minLength:{value: 2, message:'Min length is 2 letters'}, maxLength:{value: 31, message:'Max length is 30 letters'}  })} placeholder="John Smith"
                 className={`input-form input-form-text ${errors.fullName ? 'text-red-500' : 'text-white'} md:w-[221px]  xl:w-[293px]`}/>
                {errors.fullName && <p className="error-message label-form  absolute right-0 bottom-[-24px] md:bottom-[-24px] xl:bottom-[-24px] text-red-500 ">{errors.fullName?.message}</p>} 
              </div>
                
              <div className="relative">
                <label className={`label-form xl:mb-[4px] ${errors.email ? 'text-red-500' : 'text-white'}  `}>E-mail</label>
                <input type="email" {...register('email', {required:"E-mail field is required", pattern: {value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message:'Invalid email'} })} placeholder="support@carptravel.com"
                 className={`input-form input-form-text ${errors.email ? 'text-red-500' : 'text-white'} md:w-[221px] xl:w-[293px]`} /> 
                {errors.email && <p className="error-message label-form  absolute right-0 bottom-[-24px] md:bottom-[-24px] xl:bottom-[-24px] text-red-500">{errors.email?.message}</p>}
              </div>

              <div>
                <label className='label-form xl:mb-[4px]  text-white'>Position</label>
                <input type="text" {...register('position')} placeholder="Movie maker"
                 className='input-form input-form-text text-white md:w-[221px] xl:w-[293px]' /> 
              </div>
                              
              <div className="relative">
                <label  className={`label-form xl:mb-[4px] ${errors.phone ? 'text-red-500' : 'text-white'}  `}>Phone
                <span className="bg-white/5 flex items-center gap-[6px] pl-[8px]">
          <span className="inline-block shrink-0 text-justify text-[13px] font-extralight leading-[1.846] text-white xl:text-[20px] xl:leading-[1.2]">
            + 38
          </span>

          <InputMask
            mask={'(999) 99 99 999'}
            alwaysShowMask={false}
            {...register('phone', {required: "Phone field is required", pattern: {value:/^\(\d{3}\) \d{2} \d{2} \d{3}$/, message:'Incorrect phone'} })}
           
            placeholder="(097) 12 34 567"
            className={`block relative w-full  h-[24px]  px-[8px] xl:h-[28px] bg-transparent input-form-text  grow ${errors.phone ? 'text-red-500' : 'text-white'} md:w-[221px] xl:w-[293px]`} 
          />
        </span>

                {errors.phone && <p className="error-message label-form  absolute right-0 bottom-[-24px] md:bottom-[-24px] xl:bottom-[-24px] text-red-500">{errors.phone?.message}</p>}
          </label>    </div>


              {/* <div className="relative">
                <label className={`label-form ${errors.phone ? 'text-red-500' : 'text-white'} `}>Phone</label>
                <span className='absolute input-form-text top-[29px] md:top-[29px] left-[8px] xl:top-[27px]'>+ 38</span>
                <InputMask
        mask="(999) 99 99 999"
       
        maskPlaceholder="(___) __ __ ___"
        type="tel" {...register('phone', {required:"Phone field is required", pattern: {value:/^\(\d{3}\) \d{2} \d{2} \d{3}$/, message:'Incorrect phone'} })} placeholder="         (097) 12 34 567"
          className={` input-form input-form-text ${errors.phone ? 'text-red-500' : 'text-white'} md:w-[221px] xl:w-[293px]`} /> 
                {errors.phone && <p className="error-message label-form  absolute right-0 bottom-[-24px] md:bottom-[-24px] xl:bottom-[-24px] text-red-500">{errors.phone?.message}</p>}
              </div> */}
            </div>
            
            <div className="flex flex-col md:self-end md:mb-auto">
                <label  className="label-form mb-[4px] ">Message</label>
                <textarea  {...register('formText')} className="input-form-text bg-white/5 h-[193px] w-full px-[8px]  resize-none md:h-[228px] md:w-[221px] xl:h-[268px]  xl:w-[292px]"/>               
            </div> 
          </div>
          <div className="flex flex-col gap-[16px] md:flex-row md:justify-between">
           
             <label className="flex gap-[8px] text-[12px] font-extralight leading-[1.833] md:w-[222px] xl:w-[290px] xl:leading-[2.0]">
          <input
            {...register('isConfirmed', {
              required: true,
            })}
            type="checkbox"
            className="confirmation-checkbox absolute h-0 w-0 opacity-0"
          />
          <span
            className={`checkmark transition duration-300 ease-in-out relative inline-block h-[22px] w-[22px] shrink-0 cursor-pointer border hover:border-white/75 xl:h-[24px] xl:w-[24px]`}
          ></span>
          <p className='relative'>
          I confirm my consent to the processing of personal data.
          {errors.isConfirmed && (
              <span className="error-message label-form  absolute right-0 bottom-[-20px] md:bottom-[-24px] xl:bottom-[0px] text-red-500">
              You should confirm
              </span>
            )}
          </p>
        </label>

            <button className='text-[30px] font-medium uppercase  self-end transition-colors duration-300 ease-in-out hover:bg-white/20' type='submit' >
                Send            
            </button>
          </div>
        </form>
    </div>
  )
}

export default CareerForm