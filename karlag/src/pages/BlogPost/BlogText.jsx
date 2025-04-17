import React from 'react';
import Image from '../../assets/Rich_text_image.png';
import Image2 from '../../assets/Rich_text_image2.png';

function About() {
    return (
        <section>
            <div className='flex flex-col lg:flex-row relative p-4 gap-6'>
                {/* Автор и дата статьи */}
                <div className='flex flex-row lg:flex-col gap-2 w-full lg:w-1/4'>
                    <div className="w-1/2 lg:w-full bg-white p-3 rounded-2xl flex flex-col gap-4 ">
                        <p className="text-sm text-gray-500 ">Автор статьи</p>
                        <p className="font-medium">Something/media</p>
                    </div>
                    <div className="w-1/2 lg:w-full bg-white p-3 rounded-2xl flex flex-col gap-4">
                        <p className="text-sm text-gray-500">Дата статьи</p>
                        <p className="font-medium">15.08.2025</p>
                    </div>
                </div>
                {/**Текст */}
                <div className='flex flex-col w-full lg:w-3/4 gap-6'>
                    {/**Заголовок */}
                    <div className='flex flex-col'>
                        <p><span className='bg-[#CBDEF7] text-[#4E87D0] rounded-2xl px-2 py-1 uppercase font-bold'>Археология Карлага</span></p>
                        <h1 className='text-xl sm:text-2xl lg:text-4xl font-bold'>Раскопки забытых следов советских репрессий</h1>
                    </div>
                    {/**Карточка */}
                    <div>
                        <div className='flex flex-col relative p-6  bg-white rounded-2xl border-l-4 border-[#4E87D0]'>
                            <p className='text-base text-gray-600 '>Исследуйте археологические находки Карлага, одного из крупнейших советских трудовых лагерей в Казахстане. Узнайте, как раскопки и исследования раскрывают скрытые следы жизни заключенных, лагерную инфраструктуру и долгосрочное влияние принудительного труда.<span className="text-gray-400"> Откройте для себя артефакты, исторические места и экспертные анализы, которые проливают свет на прошлое Карлага</span></p>
                        </div>
                    </div>
                    {/**Статья */}
                    <div className='flex flex-col gap-12'>
                        <section className='relative rounded-2xl' >
                            <div className='flex flex-col z-1 justify-between' >
                                <div className='flex flex-col gap-2'>
                                    <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.</p>
                                </div>
                            </div>
                        </section>
                        <section className='relative rounded-2xl'>
                            <div className='flex flex-col gap-12'>
                                {/**Introduction */}
                                <div className='flex flex-col gap-6'>
                                    <h1 className='text-2xl lg:text-4xl font-bold'>Introduction</h1>
                                    <p className='text-lg text-gray-600'>
                                        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id. 
                                    </p>
                                    <p className='text-lg text-gray-600'>
                                        Eget quis mi enim, leo lacinia pharetra, semper. Eget in <span className='underline'>volutpat mollis</span> at volutpat lectus velit, sed auctor. 
                                        Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit <span className='underline'>tristique risus,</span> at donec. 
                                        In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
                                    </p>
                                </div>
                                <img src={Image} alt="Описание изображения" className="w-full max-w-full h-auto"/>
                                {/**Текст */}
                                <div className='flex flex-col gap-6'>
                                    <p className='text-lg text-gray-600'>
                                        Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. 
                                        In aliquet pellentesque aenean hac vestibulum turpis <span className='underline'>mibibendum diam</span>. Tempor integer aliquam in vitae malesuada fringilla.
                                    </p>
                                    <p className='text-lg text-gray-600 '>
                                        Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. 
                                        Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat <span className='underline'>auctor aliquam.</span>Risus, volutpat vulputate posuere purus sit congue convallis aliquet. 
                                        Arcu id augue ut feugiat donec porttitor neque. 
                                        Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor. 
                                    </p>
                                    <p className='text-lg text-gray-600'>
                                        Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
                                    </p>
                                </div>
                                {/**Software and tool */}
                                <div className='flex flex-col gap-4'>
                                    <h1 className='text-2xl lg:text-4xl font-bold'>Software and tools</h1>
                                    <p className='text-lg text-gray-600'>
                                        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                                    </p>
                                </div>
                                {/**Other resources */}
                                <div className='flex flex-col gap-4'>
                                    <h1 className='text-2xl lg:text-4xl font-bold'>Other resources</h1>
                                    <p className='text-lg text-gray-600'>
                                        Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
                                    </p>
                                    <ol className='list-decimal list-inside text-lg text-gray-600 '>
                                      <li>Lectus id duis vitae porttitor enim <span className='underline'>gravida morbi.</span></li>
                                      <li>Eu turpis <span className='underline'>posuere semper feugiat</span> volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                                      <li>Suspendisse maecenas ac <span className='underline'>donec scelerisque</span> diam sed est duis purus.</li>
                                    </ol>
                                </div>
                                <img src={Image2} alt="Описание изображения" className="w-full h-auto" />
                                {/**Текст */}
                                <div className='flex flex-col gap-6'>
                                    <p className='text-lg text-gray-600 '>
                                        Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis suspendisse at.
                                    </p>
                                    <p className='text-lg text-gray-600 '>
                                        Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.
                                    </p>
                                </div>
                                
                            </div>
                        </section>
                        {/**Conclusion */}
                        <section className='relative bg-white rounded-2xl py-8 px-10'>
                            <div className='flex flex-col gap-6' >
                                <h1 className='text-2xl lg:text-4xl font-bold'>Conclusion</h1>
                                <p className="whitespace-pre-line text-md lg:text-lg text-gray-600">
                                  {`Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. 
                                Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. 
                                Nisl at scelerisque amet nulla purus habitasse.
                                
                                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. 
                                In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. 
                                Quis lobortis at sit dictum eget nibh tortor commodo cursus.
                                
                                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. 
                                Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. 
                                Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.
                                
                                Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.`}
                                </p>
                            </div>
                        </section>   
                    </div>
                </div> 
            </div>    
        </section>
    );
}

export default About;
