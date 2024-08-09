import Footer from "../components/Footer";
import Header from "../components/Header";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-white shadow-lg">
        {" "}
        <Header />
      </div>{" "}
      <div className="container mx-auto py-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
