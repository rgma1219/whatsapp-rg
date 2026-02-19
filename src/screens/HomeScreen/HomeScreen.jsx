import React from "react";
import ContactSideBar from "../../components/ContactSideBar/ContactSideBar";

function HomeScreen(contactState) {
    return (
        <div>
            <ContactSideBar contactState={contactState} />
        </div>
    );
}

export default HomeScreen;
