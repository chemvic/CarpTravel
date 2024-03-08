'use client';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from 'react-toastify';

type FormData = {
    fullName: string;
    email: string;
    formText: string
  }


const ContactForm:React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
      } = useForm<FormData>();
      const onSubmit: SubmitHandler<FormData> = (data) => {console.log(data);      localStorage.setItem('formValues', JSON.stringify(data));
      toast('Your message has been sent'); reset();
      };

  return (
    <div className="flex flex-col w-full md:max-w-[463px] xl:max-w-[607px]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row md:gap-[20px] xl:flex-col xl:gap-[40px]">
            <div className="flex flex-col  xl:flex-row xl:justify-between">
              <div>
                <label className="label-form pb-[4px] xl:pb-[6px]">Full name</label>
                <input {...register('fullName', {required:true})} placeholder="John Smith" className="input-form input-form-text  mb-[25px] md:mb-[28px]  md:w-[221px] xl:mb-0 xl:w-[293px]"/>
              </div>
                
              <div>
                <label className="label-form pb-[4px] xl:pb-[6px]">E-mail</label>
                <input {...register('email', {required:true})} placeholder="support@carptravel.com" className="input-form input-form-text  mb-[25px] md:w-[221px] xl:w-[293px]" /> 
              </div>                
            </div>
            
            <div className="flex flex-col md:self-end">
                <label className="label-form  pb-[4px] xl:pb-[6px]">Message</label>
                <textarea  {...register('formText')} className="input-form-text h-[193px] w-full px-[8px]  resize-none mb-[16px] xl:mb-[24px] md:h-[221px] xl:h-[174px]  md:w-[463px] xl:w-[607px]"/>
            

                <button className='text-[30px] font-medium uppercase  self-end transition-colors duration-300 ease-in-out hover:bg-white/20' type='submit' >
                    Send            
                </button> 
            </div> 
            
        </form>
    </div>
  )
}

export default ContactForm