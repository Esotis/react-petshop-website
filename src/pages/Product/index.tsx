import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar2";
import Customer from "./Customer/Customer";
import Detail from "./Detail/Detail";
import Puppies from "./Puppies/Puppies";

function index() {
  return (
    <>
      <Navbar additional=" hidden 1200:flex" />
      <Detail />
      <Customer />
      <Puppies />
      <Footer />
    </>
  );
}

export default index;
