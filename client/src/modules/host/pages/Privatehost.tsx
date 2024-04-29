import Header from "@/layouts/client/components/Header";
import Footer from "@/layouts/client/components/Footer";
import React, { useState } from 'react';

const PrivateHost: React.FC = () => {
    return (
        <div className="h-full w-full">
            <Header isLoggedin={true} />
            <div>

            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default PrivateHost;
