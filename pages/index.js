import Home from "../sections/Home.section";
import LetterSection from "../sections/Letter.section";
import Flashcards from "../sections/Flashcards.section";
import VideoCard from "../sections/Video.section";
import Goodbye from "../sections/Goodbye.section";

export default function Page() {
  return (
    <div className="h-[100vh] relative bg-[#f9f7ec] w-screen bg-gray-500 overflow-x-hidden">
      <div className="h-fit w-full pb-[20%] sm:pb-[30%] relative">
        <img src="/home_bg.jpg" className="absolute object-cover" />
        <Home></Home>
      </div>
      <div className="h-[35%] sm:h-[65%] md:h-[80%] lg:h-full w-full pt-[5%] p-0 text-[3rem] font-bold ">
        <img src="/section_2_bg.png" className="absolute" />
        <LetterSection></LetterSection>

        <div className="mt-[5%] w-full flex flex-col items-center h-full">
          <div class="logo is-animetion text-[#e7e0d0] text-[14px] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[44px]">
            <span>E</span>
            <span>G</span>
            <span>G</span>
            <span>Y</span>
            <span className="px-4"> </span>
            <span>F</span>
            <span>O</span>
            <span>R</span>
            <span>M</span>
            <span>S</span>
          </div>
          <Flashcards></Flashcards>
        </div>
      </div>

      <div className="h-[30%] sm:h-[65%] md:h-[80%] lg:h-[80%] xl:h-[90%] 2xl:h-full md:mt-[3%] lg:mt-[0%] relative xl:mt-[13%] 2xl:mt-[23%] pb-[20px] w-full ">
        <img src="/section_3_bg.png" className="absolute" />
        <VideoCard></VideoCard>
      </div>
      <div className="h-full mt-[0%] lg:mt-[5%] xl:mt-[10%] 2xl:mt-[20%] w-full absolute">
        <img src="/section_4_bg.png" className="absolute " />
        <Goodbye></Goodbye>
      </div>
    </div>
  );
}
