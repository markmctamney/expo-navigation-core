import { RouteProp, ParamListBase, NavigationProp } from '@react-navigation/native';
declare type GenericRoute = {
    /**
     * React navigation route & web page URL extension
     */
    routeName: string;
    key?: string;
    /**
     * (optional) Dictionary that will be accessed via `getParams` in the target screen.
     */
    params?: object;
    /**
     * Dictionary that will only be used for web:
     *
     * @example
     *
     * The following will use the `home` route in react navigation.
     *
     * However, it will use the `pages/index.tsx` file for next. Also, it will show up as `domain.com/inbox` in the address bar.
     *
     * ```es6
     * export default function Button() {
     *   return (
     *     <Link routeName="home" web={{
     *      path: '/',
     *      as: 'inbox'
     *     }}>
     *      <Text>Press me</Text>
     *     </Link>
     *   )
     * }
     * ```
     */
    web?: {
        /**
         * Alternative path to override routeName on web.
         */
        path?: string;
        /**
         * A custom URL ending to show in the browser address bar instead of the `web.path` or `routeName`.
         *
         * Should start with `/`.
         */
        as?: string;
    };
};
export declare type NavigateTo = GenericRoute;
export declare type DefaultRouteProp = RouteProp<ParamListBase, string>;
export declare type DefaultNavigationProp = NavigationProp<ParamListBase>;
export {};
