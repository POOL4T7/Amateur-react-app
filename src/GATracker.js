import ReactGA from "react-ga";

const GATracker = (url) => {
    ReactGA.initialize("UA-217271020-1");
    ReactGA.pageview(url || '/');
};

export default GATracker
