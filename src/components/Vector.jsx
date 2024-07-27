import vectorImg from '/homeVector.jpg'

export default function Vector(){
    return(
        <>
        <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4 flex flex-col md:flex-row md:my-10">
            <div className="w-full  mt-20 md:w-1/2 md:mt-32">
            <div className="space-y-12 p-5 ">
               <h1 className="text-2xl font-bold  text-center md:text-5xl font-bold">Hello, Welcome to <span className="text-pink-500">Mushkan Enterprises</span> Where Tradition Meets Innovation in Embroidery!!!</h1>
                <p className="text-lg text-center md:text-xl text-center">Your Vision, Our Craft. Specializing in bespoke embroidery on any fabric, we bring your unique designs to life with precision and artistry. Transform your ideas into elegant, personalized creations with us</p>
            </div>
               </div>
            <div className="w-full md:w-1/2">
                <img src={vectorImg} alt=""/>
            </div>
        </div>
        </>
    )
}