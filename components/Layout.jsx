import Header from './Header';
import Container from 'react-bootstrap/Container';

const Layout = (props) => (
	<div>
		<link
			rel='stylesheet'
			href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
			integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
			crossOrigin='anonymous'
		/>
		<Header />
		<Container>{props.children}</Container>
		<script src='https://unpkg.com/react/umd/react.production.js' crossOrigin />
		<script
			src='https://unpkg.com/react-dom/umd/react-dom.production.js'
			crossOrigin
		/>
		<script
			src='https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js'
			crossOrigin
		/>
	</div>
);

export default Layout;
