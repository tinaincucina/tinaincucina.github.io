import './dgt-admin.scss';

import apiFetch from '@wordpress/api-fetch';

import { ToggleControl } from '@wordpress/components';

import {
	render,
	useState,
	useEffect
} from '@wordpress/element';

import Credit from './components/credit';

const DgtAdmin = () => {

	const dgt_options = JSON.parse( dgtadmin_data.thumbnail_checks );
	const dgt_options2 = JSON.parse( dgtadmin_data.function_checks );

	const [ checkedItems, setCheckedItems ] = useState( dgt_options );
	const [ checkedItems2, setCheckedItems2 ] = useState( dgt_options2 );

	useEffect( () => {
		apiFetch( {
			path: 'rf/dgt_api/token',
			method: 'POST',
			data: {
				thumbnails: checkedItems,
				others: checkedItems2,
			}
		} ).then( ( response ) => {
			//console.log( response );
		} );
	}, [ checkedItems, checkedItems2 ] );

	const items = [];
	Object.keys( checkedItems ).map(
		( key ) => {
			if( checkedItems.hasOwnProperty( key ) ) {
				items.push(
					<ToggleControl
						label={ key }
						checked={ checkedItems[ key ] }
						onChange={ ( value ) =>
							{
								checkedItems[ key ] = value;
								let data = Object.assign( {}, checkedItems );
								setCheckedItems( data );
							}
						}
					/>
				);
			}
		}
	);
	//console.log( checkedItems );

	const items2 = [];
	Object.keys( checkedItems2 ).map(
		( key2 ) => {
			if( checkedItems2.hasOwnProperty( key2 ) ) {
				items2.push(
					<ToggleControl
						label={ key2 }
						checked={ checkedItems2[ key2 ] }
						onChange={ ( value ) =>
							{
								checkedItems2[ key2 ] = value;
								let data2 = Object.assign( {}, checkedItems2 );
								setCheckedItems2( data2 );
							}
						}
					/>
				);
			}
		}
	);
	//console.log( checkedItems2 );

	return (
		<div className="wrap">
		<h2>Disable Generate Thumbnails</h2>
			<Credit />
			<div className="wrap">
				<h2>{ dgtadmin_text.settings }</h2>
				<h3>{ dgtadmin_text.description }</h3>
				<h4>{ dgtadmin_text.thumbnails }</h4>
				{ items }
				<h4>{ dgtadmin_text.function }</h4>
				{ items2 }
			</div>
		</div>
	);

};

render(
	<DgtAdmin />,
	document.getElementById( 'disablegeneratethumbnails' )
);

