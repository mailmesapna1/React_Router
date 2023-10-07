import Template from "../components/Template";
import signupImg from "../assets/signup.png"

function Signup({setIsLoggedIn}) {
  return (
    <Template
    title="John the Milliners learning the code with studyNotation for free"
    desc1="Build skills for today,tomorrow, and beyond."
    desc2="Education to furture-proof your career."
    image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
   />

  );
}

export default Signup;
