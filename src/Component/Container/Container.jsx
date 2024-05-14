/* eslint-disable react/prop-types */

const Container = ({children}) => {
    return (
        <div className="max-w-[1260px] container mx-auto">
            {children}
        </div>
    );
};

export default Container;