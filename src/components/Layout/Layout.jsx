import Css from "./Layout.module.css";

export const Layout = ({ children }) =>
{
    return <main className={Css.container}>{children}</main>;
};