import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://twitter.com/AbdulWadudh5">
                    <BsTwitter />
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/abdulwadudhsamdani">
                    <FaFacebookF />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/abdul_wadudh/">
                    <BsInstagram />
                </a>
            </div>
            <div>
                <a href="https://github.com/AbdulWadudh">
                    <BsGithub />
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;
