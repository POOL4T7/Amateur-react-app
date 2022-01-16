import { useEffect, useState } from "react";
import ReactGA from "react-ga";

const GATracker = () => {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        try {
            ReactGA.initialize("UA-217271020-1");
            setInitialized(true);
            console.log('reactGa initlized successfully');
        } catch (e) {
            console.log(`reactGa error`, e)
        }
    }, []);

    useEffect(() => {
        if (initialized) {
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }, [initialized]);
};

export default GATracker
