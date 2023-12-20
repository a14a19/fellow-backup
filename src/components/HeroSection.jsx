import onlineEd from "../assets/OnlineEdHeroSect.svg";
import briefCase from "../assets/Briefcase.svg";
import speak from "../assets/Speak.svg";
import idea from "../assets/idea.svg";
import board from "../assets/Board.svg";

const HeroSection = () => {
  return (
    <section className="max-w-[1199px] flex justify-center items-center mx-auto flex-col pt-20">
      <div className="flex justify-between items-center w-full flex-col-reverse md:flex-row">
        <div className="flex flex-col items-center justify-center lg-hero:items-start lg:max-w-[60%] w-full p-5">
          <h1 className="font-bold text-center lg-hero:text-start lg:text-[56px] md:text-5xl text-3xl capitalize">Become A <span className="text-black" style={{ textShadow: "1px 1px 0px white, -1px -1px 0px white" }}>Product Manager</span> In 12 weeks</h1>
          <p className="lg:text-base text-sm my-5 font-medium text-center lg-hero:text-start w-full">No Prior Experience Required*</p>
          <button className="px-4 py-3 rounded-lg bg-white text-black text-base font-semibold mt-5 hover:bg-[#]">Apply for Program</button>
          <div className="md-hero:flex hidden items-center whitespace-nowrap w-full justify-between mt-16">
            <div className="flex items-center whitespace-nowrap mx-2 max-w-[175px]">
              <img src={speak} alt="" className="h-6 me-2 bg-" />
              <div>Public speaking</div>
            </div>
            <div className="flex items-center whitespace-nowrap mx-2 max-w-[175px]">
              <img src={briefCase} alt="" className="h-6 me-2" />
              <div>Career Oriented</div>
            </div>
            <div className="flex items-center whitespace-nowrap mx-2 max-w-[175px]">
              <img src={idea} alt="" className="h-6 me-2" />
              <div>Creative Thinking</div>
            </div>
          </div>
        </div>
        <div className="p-5 relative max-w-[50%] flex items-center justify-center">
          <div className="absolute md:top-[6rem] sm:top-[3rem] top-[1rem] sm:-left-[4.5rem] -left-[6rem] sm:w-[170px] w-[135px] flex items-center justify-between bg-[#fff] rounded-lg sm:p-2 p-1 border-2 border-black heroCard" style={{ boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.3)" }}>
            <div className="flex items-center justify-center">
              <img className="bg-black p-1 rounded-lg" src={onlineEd} alt="" />
            </div>
            <div>
              <h3 className="font-bold text-black text-lg">2k+</h3>
              <p className="font-medium text-black whitespace-nowrap md:text-base text-xs">Video courses</p>
            </div>
          </div>
          <div className="absolute md:top-[2.5rem] top-[0rem] -right-[5rem] w-[128px] h-[135px] md:flex hidden items-center justify-between bg-[#fff] rounded-lg p-2 border-2 border-black flex-col heroCard" style={{ boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.3)" }}>
            <div className="flex items-center justify-center">
              <svg fill="#000000" width="40px" height="40px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"></path></g></svg>
            </div>
            <div>
              <h3 className="font-bold text-black text-center text-2xl">5k+</h3>
              <p className="font-medium text-black whitespace-nowrap">Online courses</p>
            </div>
          </div>
          <div className="absolute lg:bottom-[6rem] md:bottom-[2rem] -bottom-[0rem] sm:-right-[3rem] -right-[4rem] sm:w-[130px] w-[105px] flex items-center justify-between bg-[#fff] rounded-lg sm:p-2 p-1 border-2 border-black heroCard" style={{ boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.3)" }}>
            <div className="flex items-center justify-center">
              <img className="bg-black p-1 rounded-lg" src={board} alt="" />
            </div>
            <div>
              <h3 className="font-bold text-black text-center text-lg">100+</h3>
              <p className="font-medium text-black whitespace-nowrap md:text-base text-xs">Tutors</p>
            </div>
          </div>
          <div className="lg:max-w-[30rem] lg:max-h-[30rem] md:max-w-[28rem] md:max-h-[28rem] aspect-square rounded-full overflow-hidden md:pt-16 sm:pt-12 pt-8 outline outline-offset-2 outline-4" style={{ background: "radial-gradient(#494949, transparent)" }}>
            <img src="https://s3-alpha-sig.figma.com/img/dc33/2967/64724460297de2da00fc7c1f50b543f7?Expires=1704067200&Signature=BGXx9Jqg1DDzA5XM33mWToAYwQcSSBnXs3QALMZ15L9LyZJprbBZ6kYvorCxgo29eWKiz9dh~C2aI2ZNAmML6DwLCHnB8pz09t-8bonO3URAtovonHmTAJjHRnvtRXtOhotQENrqXxLGqlrOXZPjoob2piUvQ1BkJzAsqIFBp-S~6BztX-rnzvlmQ1ucD0Lj5D9VGwmawTwv1OlcytUuYdxKL0kTLnHIs3wWNkMuZHfI8IYhEw6TLHLtFo2w1BDNnTY8JU02A82QXgy9EFJMIqoJqQkSD97eO9ezqF42nIC6EUPE~V04LGTuWzrlVdfvP2ytpfaZh5Eq4nGjnkMEJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="sliderHero my-16">
          <ul>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/NmfwXFcJv8kzyVXtmRd896inn4.png"} alt="Amazon" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/EO4hT1Ow4k2Iv67e5OLMYVFjo9Q.png?scale-down-to=512"} alt="Microsoft" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/CToWp1fqkTHyZtak82umfCUomY.png"} alt="Google" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/faS49gRAjkgx8LeVkwtazFLf9w.png"} alt="Meta" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/SMWKCY1ewqcCoNVjw75UJIZSPzk.png?scale-down-to=512"} alt="Twitter" className="h-9 me-3" />
            </li>

            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/NmfwXFcJv8kzyVXtmRd896inn4.png"} alt="Amazon" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/EO4hT1Ow4k2Iv67e5OLMYVFjo9Q.png?scale-down-to=512"} alt="Microsoft" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/CToWp1fqkTHyZtak82umfCUomY.png"} alt="Google" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/faS49gRAjkgx8LeVkwtazFLf9w.png"} alt="Meta" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/SMWKCY1ewqcCoNVjw75UJIZSPzk.png?scale-down-to=512"} alt="Twitter" className="h-9 me-3" />
            </li>

            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/NmfwXFcJv8kzyVXtmRd896inn4.png"} alt="Amazon" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/EO4hT1Ow4k2Iv67e5OLMYVFjo9Q.png?scale-down-to=512"} alt="Microsoft" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/CToWp1fqkTHyZtak82umfCUomY.png"} alt="Google" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/faS49gRAjkgx8LeVkwtazFLf9w.png"} alt="Meta" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/SMWKCY1ewqcCoNVjw75UJIZSPzk.png?scale-down-to=512"} alt="Twitter" className="h-9 me-3" />
            </li>

            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/NmfwXFcJv8kzyVXtmRd896inn4.png"} alt="Amazon" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/EO4hT1Ow4k2Iv67e5OLMYVFjo9Q.png?scale-down-to=512"} alt="Microsoft" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/CToWp1fqkTHyZtak82umfCUomY.png"} alt="Google" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/faS49gRAjkgx8LeVkwtazFLf9w.png"} alt="Meta" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/SMWKCY1ewqcCoNVjw75UJIZSPzk.png?scale-down-to=512"} alt="Twitter" className="h-9 me-3" />
            </li>

            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/NmfwXFcJv8kzyVXtmRd896inn4.png"} alt="Amazon" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/EO4hT1Ow4k2Iv67e5OLMYVFjo9Q.png?scale-down-to=512"} alt="Microsoft" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/CToWp1fqkTHyZtak82umfCUomY.png"} alt="Google" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/faS49gRAjkgx8LeVkwtazFLf9w.png"} alt="Meta" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/SMWKCY1ewqcCoNVjw75UJIZSPzk.png?scale-down-to=512"} alt="Twitter" className="h-9 me-3" />
            </li>

            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/NmfwXFcJv8kzyVXtmRd896inn4.png"} alt="Amazon" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/EO4hT1Ow4k2Iv67e5OLMYVFjo9Q.png?scale-down-to=512"} alt="Microsoft" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/CToWp1fqkTHyZtak82umfCUomY.png"} alt="Google" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/faS49gRAjkgx8LeVkwtazFLf9w.png"} alt="Meta" className="h-9 me-3" />
            </li>
            <li className="flex p-5 mx-8 w-max justify-start items-center">
              <img src={"https://framerusercontent.com/images/SMWKCY1ewqcCoNVjw75UJIZSPzk.png?scale-down-to=512"} alt="Twitter" className="h-9 me-3" />
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;