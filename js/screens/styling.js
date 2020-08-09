import { StyleSheet, Dimensions } from 'react-native';

export const teamDetails = StyleSheet.create({
	containerView:
	{
		flex: 1,
		padding: 10,
		justifyContent: 'flex-start',
	},
	teamName:
	{
		fontSize: 20,
		lineHeight: 40,
		textAlign: 'center',
	},
	image:
	{
		height: 100,
		width: 100,
		alignSelf:'center',
		borderWidth: 1,
	},
	scroller:
	{
		flex: 200,
		width: '100%',
		marginBottom: 20,
	},
	flatList:
	{
		width: '100%',
		height: '85%',
		borderWidth: 1,
		borderColor: 'teal',
		padding: 10
	},
	titleText:
	{
		fontSize: 20,
		lineHeight: 40,
		backgroundColor: 'gainsboro',
	},
	flatListText:
	{
		fontSize: 15,
		lineHeight: 30
	},
	matchView:
	{
		padding: 10,
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	loader:
	{
		position: 'absolute',
		alignSelf: 'center',
		backgroundColor: '#80808088',
		height: '100%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	}
});

export const home = StyleSheet.create({
	containerView:
	{
		flex: 1,
	},
	teamViewTouchable:
	{
		height: 100,
		width: '100%',
		borderWidth: 1,
		justifyContent: 'center',
		padding: 10
	}
});
