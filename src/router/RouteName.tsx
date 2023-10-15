abstract class RouteName {
    static HOME = '/';
    static SHOP = '/shop/:category/:sort/:limit';
    static FEATURES = '/features';
    static ABOUT = '/about'
    static CONTACT = '/contact';
    static LOGIN = '/login';
    static REGISTER = '/register';
    static PROFILE = '/profile/:id';
}

export default RouteName;