
import './App.css'
import 'remixicon/fonts/remixicon.css'

function App() {


  return (
    <div className='h-screen w-screen overflow-y-scroll'>


      <div className=' flex relative  gap-[38px]  sm:sticky sm:border-r sm:flex sm:w-[10%] sm:height-screen sm:right-0 sm:ml-5'>

        <div className='mt-3 absolute flex justify-center w-full '><i className="ri-twitter-x-line text-white text-2xl sm:absolute  sm:mt-3 sm:z-10 sm:text-3xl sm:overflow-hidden"></i>
        </div>
        <div>
          <button className='absolute flex right-0 mt-4 rounded-full w-[90px] h-4 border-[1px] font-semibold border-white  justify-end  font-serif text-sm p-3 items-center text-white mr-3 sm:hidden '>Upgrade</button>
        </div>
        <div>
          <img className='absolute flex left-0 h-9 w-9 mt-3  ml-4 object-cover rounded-full sm:bottom-0 sm:my-4 ' src="https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg" alt="" />
        </div>
      </div>

      <div className="w-full absolute bottom-0  flex  items-end justify-around gap-5 z-10 bg-black p-2
    sm:items-center sm:flex-col sm:justify-start sm:gap-6
    sm:top-20  sm:w-[auto]">
        <div> <i className="ri-home-9-fill text-white text-3xl sm:text-2xl"></i></div>
        <div><i className="ri-search-line text-white text-3xl sm:text-2xl"></i></div>
        <div><i className="ri-notification-3-line text-white text-3xl sm:text-2xl"></i></div>
        <div><i className="ri-mail-line text-white text-3xl sm:text-2xl"></i></div>
        <div><i className="ri-group-fill text-white text-3xl sm:text-2xl"></i></div>
        <div><i className="ri-user-3-line text-white text-3xl sm:text-2xl"></i></div>
      </div>


      <div className='relative flex top-[10%] overflow-x-auto p-4 justify-around scrollbar-none w-full whitespace-nowrap text-base font-medium gap-6 text-gray-400 border-b-[0.5px] border-gray-500 sm:sticky sm:flex 
    sm:top-0  sm:overflow-x-auto sm:whitespace-nowrap sm:gap-7 sm:w-full sm:z-0 '
        style={{ scrollbarWidth: 'none' }}>
        <h4 className='text-gray-500  min-w-max'>For you</h4>
        <h4 className='text-gray-500  min-w-max'>Following</h4>
        <h4 className='text-gray-500  min-w-max'>Web Development</h4>
        <h4 className='text-gray-500  min-w-max'>Mern Stack Developers</h4>
        <h4 className='text-gray-500  min-w-max'>Full Stack Developers</h4>
      </div>


      <div className='relative top-[11%] z-0 pb-2 '>

        <div className='relative border-b-[0.5px] border-gray-500'>
          <div className='flex flex-row align-middle border-gray-500'>
            <div className=''>
              <img className='absolute flex h-9 w-9 mt-3  ml-4 object-cover rounded-full' src="https://pbs.twimg.com/profile_images/1661201415899951105/azNjKOSH_400x400.jpg " alt="" />
            </div>
            <div className=' text-white w-full justify-center ml-16'>
              <h4 className='font-semibold mt-3 mb-2'>Coder girl <span>@dev-maims 21h</span>
              </h4>
              <p> Twitter is fun with followers,<br />
                if you in tech, say hi <br />
                Lets connect...
              </p>
            </div>
            <div className='mt-3'>
              <i className="ri-equalizer-line text-blue-500 m-5  mt-11"></i>
            </div>
          </div>

          <div className=' align-middle  text-gray-500 w-100vw ml-16 text-lg my-2 flex gap-12 '>

            <span><i className="ri-chat-1-line "></i></span>
            <span><i className="ri-arrow-up-down-fill"></i></span>
            <span><i className="ri-heart-line"></i></span>
            <span><i className="ri-chat-poll-line"></i></span>

            <div className='flex gap-3 right-3'>
              <span><i className="ri-bookmark-line"></i></span>
              <span><i className="ri-share-line"></i></span>
            </div>
          </div>
        </div>

        <div className='relative top-[20%] h-30vh border-b-[0.5px] border-gray-500'>
          <div className='flex flex-row align-middle'>
            <div className=''>
              <img className='absolute flex h-9 w-9 mt-3  ml-4 object-cover object-top rounded-full' src="https://thumbs.dreamstime.com/b/profile-beautiful-smiling-girl-6243612.jpg " alt="" />
            </div>
            <div className=' text-white w-full justify-center ml-16'>
              <h4 className='font-semibold mt-3 mb-2'>Amik Digital<span>@amikdigital</span>
              </h4>
              <p>Imagine art that reacts to your presense-colors shifts, sounds change, visuals evolve in real-time,<br />
                with web tech + physical spaces, interactive art installations bring creativity to life<br />
                Would you try coding your own?
              </p>
            </div>
            <div className='mt-3'>
              <i className="ri-equalizer-line text-blue-500 m-5  mt-11"></i>
            </div>
          </div>

          <div className=' align-middle  text-gray-500 w-100vw ml-16 text-lg my-2 flex gap-12 '>

            <span><i className="ri-chat-1-line "></i></span>
            <span><i className="ri-arrow-up-down-fill"></i></span>
            <span><i className="ri-heart-line"></i></span>
            <span><i className="ri-chat-poll-line"></i></span>

            <div className='flex gap-3 right-3'>
              <span><i className="ri-bookmark-line"></i></span>
              <span><i className="ri-share-line"></i></span>
            </div>
          </div>

        </div>

        <div className='relative top-[20%] h-30vh border-b-[0.5px] border-gray-500 first-letter:'>
          <div className='flex flex-row align-middle'>
            <div className=''>
              <img className='absolute  flex h-9 w-9 mt-3  ml-4 object-cover object-top  rounded-full' src="https://images.squarespace-cdn.com/content/v1/58e167a8414fb5c0b2b8c13e/1503561540900-K0FXVM3QNP4843AJGQCD/Circle+Profile.jpg" alt="" />
            </div>
            <div className=' text-white w-full justify-center ml-16'>
              <h4 className='font-semibold mt-3 mb-2'>Neha Yadav <span>@nehayadav 1m</span>
              </h4>
              <p>BIG NEWS 🚨 Indian National Anthem accidently played in Lahore ahead of Australia vs England Champions Trophy Match 😂🔥 <br/>

                More interestingly, in Lahore, Pakistan, where India is not even travelling for the  Champions Trophy 2025.<br/>

                The incident happened at the Gaddafi Stadium in Pakistan.<br />

                Pakistan Cricket Board is being heavily trolled 🤣<br />
              </p>
            </div>
            <div className='mt-3'>
              <i className="ri-equalizer-line text-blue-500 m-5  mt-11"></i>
            </div>
          </div>

          <div className=' align-middle  text-gray-500 w-100vw ml-16 text-lg my-2 flex gap-12 '>

            <span><i className="ri-chat-1-line "></i></span>
            <span><i className="ri-arrow-up-down-fill"></i></span>
            <span><i className="ri-heart-line"></i></span>
            <span><i className="ri-chat-poll-line"></i></span>

            <div className='flex gap-3 right-3'>
              <span><i className="ri-bookmark-line"></i></span>
              <span><i className="ri-share-line"></i></span>
            </div>
          </div>

        </div>
    

      <div className='relative top-[11%] h-30vh border-b-[0.5px] border-gray-500'>
        <div className='flex flex-row align-middle'>
          <div className=''>
            <img className='absolute flex h-9 w-9 mt-3  ml-4 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQMq60ob6zQlQgb4hQ7jbNA7d_pU6Z2G0Gg&s " alt="" />
          </div>
          <div className=' text-white w-full justify-center ml-16'>
            <h4 className='font-semibold mt-3 mb-2'>Xavier <span>@memesyou 21h</span>
            </h4>
            <p> Twitter is fun with followers,<br />
              if you in tech, say hi <br />
              Lets connect...
            </p>
          </div>
          <div className='mt-3'>
            <i className="ri-equalizer-line text-blue-500 m-5  mt-11"></i>
          </div>
        </div>

        <div className=' align-middle  text-gray-500 w-100vw ml-16 text-lg my-2 flex gap-12 '>

          <span><i className="ri-chat-1-line "></i></span>
          <span><i className="ri-arrow-up-down-fill"></i></span>
          <span><i className="ri-heart-line"></i></span>
          <span><i className="ri-chat-poll-line"></i></span>

          <div className='flex gap-3 right-3'>
            <span><i className="ri-bookmark-line"></i></span>
            <span><i className="ri-share-line"></i></span>
          </div>
        </div>

      </div>

      <div className='relative top-[11%] h-30vh border-b-[0.5px] border-gray-500'>
        <div className='flex flex-row align-middle'>
          <div className=''>
            <img className='absolute flex h-9 w-9 mt-3  ml-4 object-cover object-top rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToSGUswMj7x7eUuZuWta2qJVizAOY_TaJ92_CzgzT8-7Fh68nJnYfi8nr3xbWa8ru4zg&usqp=CAU" alt="" />
          </div>
          <div className=' text-white w-full justify-center ml-16'>
            <h4 className='font-semibold mt-3 mb-2'>Siddharth Malhotra <span>@iamsid</span>
            </h4>
            <p>Whats the best way to handle people using 125%-150% browser zoom? Some users love their zoom and its just 🫠🫠🫠 for the uiux
            </p>
          </div>
          <div className='mt-3'>
            <i className="ri-equalizer-line text-blue-500 m-5  mt-11"></i>
          </div>
        </div>

        <div className=' align-middle  text-gray-500 w-100vw ml-16 text-lg my-2 flex gap-12 '>

          <span><i className="ri-chat-1-line "></i></span>
          <span><i className="ri-arrow-up-down-fill"></i></span>
          <span><i className="ri-heart-line"></i></span>
          <span><i className="ri-chat-poll-line"></i></span>

          <div className='flex gap-3 right-3'>
            <span><i className="ri-bookmark-line"></i></span>
            <span><i className="ri-share-line"></i></span>
          </div>
        </div>

      </div>

      <div className='relative top-[11%] h-30vh border-b-[0.5px] border-gray-500 first-letter:'>
        <div className='flex flex-row align-middle'>
          <div className=''>
            <img className='absolute  flex h-9 w-9 mt-3  ml-4 object-cover object-top  rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/7/78/Jack_Dorsey_2014_%28cropped%29.jpg" alt="" />
          </div>
          <div className=' text-white w-full justify-center ml-16'>
            <h4 className='font-semibold mt-3 mb-2'>Coding World <span>@codingworld</span>
            </h4>
            <p>Features of Python 🤔<br /><br />

              ✅ Very easy to learn & read <br />
              ✅ Perfect for beginners<br />
              ✅ Works on all computers & mobiles<br />
              ✅ Used for websites, AI & automation<br />
              ✅ Huge support from developers<br />

              That’s why Python is so popular!
            </p>
          </div>
          <div className='mt-3'>
            <i className="ri-equalizer-line text-blue-500 m-5  mt-11"></i>
          </div>
        </div>

        <div className=' align-middle  text-gray-500 w-100vw ml-16 text-lg my-2 flex gap-12 '>

          <span><i className="ri-chat-1-line "></i></span>
          <span><i className="ri-arrow-up-down-fill"></i></span>
          <span><i className="ri-heart-line"></i></span>
          <span><i className="ri-chat-poll-line"></i></span>

          <div className='flex gap-3 right-3'>
            <span><i className="ri-bookmark-line"></i></span>
            <span><i className="ri-share-line"></i></span>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default App
