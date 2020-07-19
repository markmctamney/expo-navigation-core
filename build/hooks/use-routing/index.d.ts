import { DefaultRouteProp, DefaultNavigationProp } from './types';
export default function useRouting<RProp extends DefaultRouteProp = DefaultRouteProp, NProp extends DefaultNavigationProp = DefaultNavigationProp>(): {
    navigate: <To extends {
        routeName: string;
        key?: string | undefined;
        params?: object | undefined;
        web?: {
            path?: string | undefined;
            as?: string | undefined;
        } | undefined;
    } = {
        routeName: string;
        key?: string | undefined;
        params?: object | undefined;
        web?: {
            path?: string | undefined;
            as?: string | undefined;
        } | undefined;
    }>(route: To) => void;
    getParam: <Param>(param: string, fallback?: unknown) => Param;
    push: <To_1 extends {
        routeName: string;
        key?: string | undefined;
        params?: object | undefined;
        web?: {
            path?: string | undefined;
            as?: string | undefined;
        } | undefined;
    } = {
        routeName: string;
        key?: string | undefined;
        params?: object | undefined;
        web?: {
            path?: string | undefined;
            as?: string | undefined;
        } | undefined;
    }>(route: To_1) => void;
    goBack: () => any;
    params: any;
    prefetch: (routeName: string) => void;
    popToTop: any;
    replace: <To_2 extends {
        routeName: string;
        key?: string | undefined;
        params?: object | undefined;
        web?: {
            path?: string | undefined;
            as?: string | undefined;
        } | undefined;
    } = {
        routeName: string;
        key?: string | undefined;
        params?: object | undefined;
        web?: {
            path?: string | undefined;
            as?: string | undefined;
        } | undefined;
    }>({ routeName, params }: To_2) => void;
    setParams: any;
};
