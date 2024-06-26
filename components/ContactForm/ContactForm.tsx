'use client';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

type FormData = {
  fullName: string;
  email: string;
  formText: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = data => {
    toast('Your message has been sent');
    reset();
    localStorage.removeItem('contactsFormValues');
  };

  watch(data => {
    localStorage.setItem('contactsFormValues', JSON.stringify(data));
  });

  useEffect(() => {
    const savedFormData = localStorage.getItem('contactsFormValues');
    if (savedFormData !== null) {
      const result = JSON.parse(savedFormData);
      setValue('fullName', result.fullName);
      setValue('email', result.email);
      setValue('formText', result.formText);
    }
  }, [setValue]);

  return (
    <div className="flex flex-col w-full md:max-w-[463px] xl:max-w-[607px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row md:gap-[20px] xl:flex-col xl:gap-[40px]"
      >
        <div className="flex flex-col  xl:flex-row xl:justify-between">
          <div className="relative">
            <label
              className={`label-form ${errors.fullName ? 'text-red-500' : 'text-white'} pb-[4px] xl:pb-[6px]`}
            >
              Full name
            </label>
            <input
              type="text"
              {...register('fullName', {
                required: 'Full name is required',
                pattern: {
                  value: /^[а-яА-Яa-zA-Z\s]*$/,
                  message: 'Incorrect name',
                },
                minLength: { value: 2, message: 'Min length is 2 letters' },
                maxLength: { value: 31, message: 'Max length is 30 letters' },
              })}
              placeholder="John Smith"
              className={`input-form input-form-text ${errors.fullName ? 'text-red-500' : 'text-white'} mb-[25px] md:mb-[28px]  md:w-[221px] xl:mb-0 xl:w-[293px]`}
            />
            {errors.fullName && (
              <p className="error-message label-form  absolute right-0 bottom-0 md:bottom-[5px] xl:bottom-[-24px] text-red-500 ">
                {errors.fullName?.message}
              </p>
            )}
          </div>

          <div className="relative">
            <label
              className={`label-form ${errors.email ? 'text-red-500' : 'text-white'} pb-[4px] xl:pb-[6px]`}
            >
              E-mail
            </label>
            <input
              type="email"
              {...register('email', {
                required: 'E-mail field is required',
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email',
                },
              })}
              placeholder="support@carptravel.com"
              className={`input-form input-form-text ${errors.email ? 'text-red-500' : 'text-white'} mb-[25px] md:mb-[28px]  md:w-[221px] xl:mb-0 xl:w-[293px]`}
            />
            {errors.email && (
              <p className="error-message label-form  absolute right-0 bottom-0 md:bottom-[5px] xl:bottom-[-24px] text-red-500">
                {errors.email?.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:self-end">
          <label className="label-form  pb-[4px] xl:pb-[6px]">Message</label>
          <textarea
            {...register('formText')}
            className="input-form-text bg-white/5 h-[193px] w-full px-[8px]  resize-none mb-[16px] xl:mb-[24px] md:h-[221px] xl:h-[174px]  md:w-[463px] xl:w-[607px]"
          />

          <button
            className="text-[30px] font-medium uppercase  self-end transition-colors duration-300 ease-in-out hover:bg-white/20"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
