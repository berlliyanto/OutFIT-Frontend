import RouteName from "../../../router/RouteName";

const Logo = () => {
    return (
        <div onClick={() => {window.location.href = RouteName.HOME}}
        className="text-2xl font-bold text-slate-700 cursor-pointer">Out<span className="text-emerald-500">FIT</span>.</div>
    )
}

export default Logo;