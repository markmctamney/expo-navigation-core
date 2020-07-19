import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback } from 'react';
import * as _ from 'lodash';
const prefetch = (routeName) => { };
export default function useRouting() {
    const { navigate: nav, 
    // @ts-ignore
    push: pushTo, goBack, 
    // @ts-ignore
    popToTop, replace: rep, setParams, } = useNavigation();
    const { params } = useRoute();
    const navigate = useCallback((route) => {
        nav({
            name: route.routeName,
            params: route.params,
            key: route.key,
        });
    }, [nav]);
    const push = useCallback((route) => {
        if (pushTo)
            pushTo(route);
        else
            navigate(route);
    }, [pushTo, navigate]);
    const getParam = (param, fallback) => {
        return _.get(params, param, fallback);
    };
    const replace = useCallback(({ routeName, params }) => {
        rep(routeName, params);
    }, [rep]);
    return {
        navigate,
        getParam,
        push,
        goBack: () => goBack(),
        params,
        prefetch,
        popToTop,
        replace,
        setParams,
    };
}
//# sourceMappingURL=index.js.map