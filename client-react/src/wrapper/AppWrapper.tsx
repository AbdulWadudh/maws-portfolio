import { NavDots, SocialMedia } from "../components";

const AppWrapper = (Component: any, idName: string, classNames: any) =>
function HOC() {
        return (
            <div id={idName} className={`app__container ${classNames}`}>
                <SocialMedia />
                <div className="app__wrapper app__flex">
                    <Component />
                    <div className="copyright">
                        <p className="p-text">@2020 MAWS</p>
                        <p className="p-text">All Rights Reserved!</p>
                    </div>
                </div>
                <NavDots active={idName} />
            </div>
        );
    };

export default AppWrapper;
