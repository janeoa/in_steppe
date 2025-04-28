import React from 'react';
import MainSVG from '../../assets/Main_svg.svg?react';
import ArrowIcon from '../../assets/icons/Icon_arrow_right2.svg?react';
import Icon1 from '../../assets/icons/Icon.svg?react'
import Icon2 from '../../assets/icons/Icon-1.svg?react'
import Icon3 from '../../assets/icons/Icon-2.svg?react'

function Contact() {
    return (
      <section className='mt-10 lg:mt-20 p-0 lg:p-9'>
          <div className='flex flex-col gap-16'>
            {/** Наши контакты */}
            <div className='relative bg-white lg:rounded-xl flex flex-col items-center justify-center py-14 px-4 lg:px-18 overflow-hidden'>
              <div className='flex flex-col items-center justify-center text-center w-full lg:w-2/3 gap-4'>
                <p><span className='bg-[#CBDEF7] text-[#4E87D0] rounded-2xl px-2 py-1 uppercase font-bold'>Наши контакты</span></p>
                <h1 className='text-2xl font-bold lg:text-3xl'>Свяжитесь с нами: вопросы, запросы и сотрудничество</h1>
                <p>Есть вопросы или нужна дополнительная информация? Свяжитесь с нами! Если вы исследователь, студент или просто хотите узнать больше об истории ГУЛАГа в Казахстане, мы здесь, чтобы помочь. Обращайтесь к нам за запросами, сотрудничеством или взносами.</p>
              </div>
              <MainSVG className="hidden lg:block absolute object-cover top-[30%] w-[50%] h-auto z-0"/>
            </div>
            {/** Отправить сообщение */}
            <form className='flex flex-col-reverse lg:flex-row gap-6 p-4 lg:p-0'>
              {/** Контактная информация */}
              <div className='flex flex-col justify-between w-full lg:w-[40%] gap-6'>
                <div className='flex flex-col gap-2'>

                  <div className='flex justify-between bg-white rounded-xl p-4'>
                    <div className='flex flex-col gap-1'>
                      <p className='text-base opacity-40'>You can email us here:</p>
                      <p className='text-base'>Something@gmail.com</p>
                    </div>
                    <span className='flex items-center justify-center'><button className="p-3 flex items-center justify-center bg-[#EEF4FC] rounded-md shadow hover:shadow-md active:scale-95 transition transform duration-300">
                      <ArrowIcon/>
                    </button></span>
                  </div>

                  <div className='flex justify-between bg-white rounded-xl p-4'>
                    <div className='flex flex-col gap-1'>
                      <p className='text-base opacity-40'>Give us a call on:</p>
                      <p className='text-base'>+420 123 456 78 90</p>
                    </div>
                    <span className='flex items-center justify-center'><button className="p-3 flex items-center justify-center bg-[#EEF4FC] rounded-md shadow hover:shadow-md active:scale-95 transition transform duration-300">
                      <ArrowIcon/>
                    </button></span>
                  </div>

                  <div className='flex justify-between bg-white rounded-xl p-4'>
                    <div className='flex flex-col gap-1'>
                      <p className='text-base opacity-40'>Location:</p>
                      <p className='text-base'>Казахстан, Астана, ул. Касыма Аманжолова 34</p>
                    </div>
                    <span className='flex items-center justify-center'><button className="p-3 flex items-center justify-center bg-[#EEF4FC] rounded-md shadow hover:shadow-md active:scale-95 transition transform duration-300">
                      <ArrowIcon/>
                    </button></span>
                  </div>
                </div>
                {/**Социальные сети */}
                <div className='flex flex-col gap-2 w-[170px]'>
                  <p className='text-base opacity-40'>Social media:</p>
                  <div className='flex gap-3 bg-white rounded-lg p-4 justify-center items-center'>
                    <button aria-label="Facebook" className='bg-[#EEF4FC] rounded-md shadow hover:shadow-md p-2 transition-colors duration-300 transform active:scale-95'><Icon1 /></button>
                    <button aria-label="Instagram" className='bg-[#EEF4FC] rounded-md shadow hover:shadow-md p-2 transition-colors duration-300 transform active:scale-95'><Icon2 /></button>
                    <button aria-label="Twitter" className='bg-[#EEF4FC] rounded-md shadow hover:shadow-md p-2 transition-colors duration-300 transform active:scale-95'><Icon3 /></button>
                  </div> 
                </div>
              </div>
              {/** Отправить сообщение */}
              <div className='flex flex-col bg-white p-4 lg:p-8 gap-4 rounded-xl w-full lg:w-[60%]'>
                {/**Имя Фамилия */}
                <div className='flex flex-col lg:flex-row gap-4'>
                  <div className='flex flex-col gap-2 w-full lg:w-1/2'>
                    <label>Ваше имя</label>
                    <input type="text" placeholder="Placeholder" className='bg-[#F6F9FD] rounded-md py-3 px-6'></input>
                  </div>
                  <div className='flex flex-col gap-2 w-full lg:w-1/2'>
                    <label>Ваша фамилия</label>
                    <input type="text" placeholder="Placeholder" className='bg-[#F6F9FD] rounded-md py-3 px-6'></input>
                  </div>
                </div>
                {/**Почта и телефон */}
                <div className='flex flex-col lg:flex-row gap-4'>
                  <div className='flex flex-col gap-2 w-full lg:w-1/2'>
                    <label>Электронная почта</label>
                    <input type="text" placeholder="Placeholder" className='bg-[#F6F9FD] rounded-md py-3 px-6'></input>
                  </div>
                  <div className='flex flex-col gap-2 w-full lg:w-1/2'>
                    <label>Номер телефона</label>
                    <div className='flex gap-2'>
                      <input type="text" placeholder="+420" className='bg-[#F6F9FD] rounded-md py-3 px-6 w-1/4'></input>
                      <input type="text" placeholder="123 456 78 90" className='bg-[#F6F9FD] rounded-md py-3 px-6 w-3/4'></input>
                    </div>
                  </div>
                </div>
                {/**Input */}
                <div className='flex flex-col gap-2'>
                  <label>Напишите что вас интересует</label>
                  <input type="text" placeholder="Placeholder" className='bg-[#F6F9FD] rounded-md py-3 px-6 pb-[100px]'></input>
                  {/**Отправить сообщени */}
                  <div className='flex justify-center'>
                    <button type="submit" className="inline-flex w-full lg:w-auto items-center justify-center px-6 py-3  text-white bg-[#4E87D0] rounded-lg font-medium text-base active:scale-95 transition transform duration-150 hover:bg-[#254194]">Отправить сообщение</button>
                  </div>
                </div>
                
                
              </div>
            </form>
          </div>
      </section>
    )
  };
  
  export default Contact;