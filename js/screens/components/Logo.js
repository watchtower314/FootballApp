import React from 'react';
import { View, Image } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { teamDetails } from '../styling';
import PropTypes from 'prop-types';

export const Logo = ({uri}) => (
	<View style = {teamDetails.image} >
		{uri.includes('.svg')
			? <SvgUri
   				 width={100}
  				  height={100}
    				uri={uri}/>
			: <Image style = {{height: 100, width: 100}}
				source = {{uri: uri}}
				resizeMode = 'center' />}
	</View>
);

Logo.propTypes = {
	uri: PropTypes.string
};