import React from 'react';

// Comps
import PrivateHeader from './PrivateHeader';
import LinksListFilters from './LinksListFilters';
import LinksList from './LinksList';
import AddLink from './AddLink';

export default () => {
	return (
		<div>
			<PrivateHeader title="Your Lnks"/>
			<div className="page-content">				
				<LinksListFilters/>
				<AddLink/>
				<LinksList/>
			</div>		
		</div>			
	);
};