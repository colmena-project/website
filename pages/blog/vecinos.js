import Layout from "../../components/Sections/Layout";
import Loader from "../../components/Sections/Loader";
import Header from "../../components/Sections/Header";
import PageTitle from "./PageTitle";
import BlogContainer from "../../components/Blog/BlogContainer";
import BlogDetails from "../../components/BlogPost/BlogDetails1";
import Sidebar from "../../components/Blog/Sidebar";
import Footer from "../../components/Sections/Footer";
import ToTop from "../../components/Sections/ToTop";

const Vecinos = () => (

    <Layout 
        pageTitle="Colmena - Blog" 
        colorSchema="/assets/colors/colmena-green.css"
    >
        <Loader />
        <Header />
        <PageTitle />

        <BlogContainer>
            <BlogDetails />
            <Sidebar />
        </BlogContainer>

        <Footer />
        <ToTop />
    </Layout>

)

export default Vecinos;