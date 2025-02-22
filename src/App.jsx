
import './App.css'
import 'remixicon/fonts/remixicon.css'

function App() {


  return (
    <div className="relative flex h-screen w-screen bg-black ">

      <div className='absolute  w-full flex justify-center sm:justify-start '><i className=" flex ri-twitter-x-line text-white text-2xl sm:absolute m-4   sm:text-3xl"></i>
     </div>
     <div className='w-full '>
        <button className='absolute flex right-0 mt-4 rounded-full w-19 h-4 border-[1px] font-semibold border-white overflow-hidden justify-end  font-seriftext-sm p-3 items-center text-white mr-3 sm:hidden '>Upgrade</button>
     </div>
     <div className='w-full'>
      <img className=' absolute left-0 h-9 w-9 mt-4 ml-4 object-cover rounded-full sm:bottom-0 sm:my-4 ' src="https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg" alt="" />
     </div>

    <div className=" absolute flex h-[auto] items-end justify-around w-full bottom-0 gap-5
                     sm:items-center sm:flex-col sm:justify-start sm:gap-6
    sm:top-20  sm:w-[auto] sm:mx-4 ">
       <div> <i className="ri-home-9-fill text-white text-3xl sm:text-2xl"></i></div>
       <div><i className="ri-search-line text-white text-3xl sm:text-2xl"></i></div>
       <div><i className="ri-notification-3-line text-white text-3xl sm:text-2xl"></i></div>
       <div><i className="ri-mail-line text-white text-3xl sm:text-2xl"></i></div>
       <div><i className="ri-group-fill text-white text-3xl sm:text-2xl"></i></div>
       <div><i className="ri-user-3-line text-white text-3xl sm:text-2xl"></i></div>
       
  
   </div>

    </div>
  )
}

export default App
