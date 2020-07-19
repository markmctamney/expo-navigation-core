import React from 'react';
import { LinkProps } from '..';
/**
 * Example usage from expo-gatsby-navigation
 *
 * ```es6
 * import React from 'react'
 * import { LinkMaker, LinkProps } from 'expo-navigation-core'
 * import { Text } from 'react-native'
 * import { ExtraLinkProps, GatsbyWebProps } from './types'
 *
 * const Link = React.forwardRef(
 * (
 * 	props: LinkProps<ExtraLinkProps, GatsbyWebProps>,
 * 	ref?: React.Ref<Text>
 * ) => {
 * 	const Link = LinkMaker<ExtraLinkProps, GatsbyWebProps>()
 * 	return <Link {...props} ref={ref} />
 * }
 * )
 *
 * export default React.memo(Link)
 * ```
 */
declare const LinkMaker: <ExtraProps extends object = {}, Web extends object = {}, Params extends object = {}>() => React.ForwardRefExoticComponent<React.PropsWithoutRef<LinkProps<ExtraProps, Web, Params>> & React.RefAttributes<any>>;
export default LinkMaker;
