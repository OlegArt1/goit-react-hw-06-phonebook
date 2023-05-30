import clsx from "clsx";
import Css from "./Button.module.css";

export const Button =
({
    selected = false,
    type = "button",
    children,
    ...otherProps
}) =>
{
    return (
        <button className={clsx(Css.btn, {[Css.isSelected]: selected})}
                type={type}{...otherProps}>{children}</button>
    );
};