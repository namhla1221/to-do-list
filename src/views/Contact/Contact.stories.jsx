import Contact from "./Contact";

import Global from "../../components/Global/Global";

const config = {
  title: "views/Contact",
};

export default config;

const Default = () => (
  <Global>
    <Contact onSave={console.log} />
  </Global>
);

export { Default };
