import { modulesList } from "../constants/commonVars";

const NavDots = ({ active }: any) => {
    return (
        <div className="app__navigation">
            {modulesList.map((item: any, idx) => (
                <a href={`#${item}`} key={`${item}${idx}`} className="app__navigation-dot" style={active === item ? { backgroundColor: "#313BAC" } : {}} />
            ))}
        </div>
    );
};

export default NavDots;
