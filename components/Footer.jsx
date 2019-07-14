import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const LinkColumn = (props) => (
	<Col sm={2} xs={12}>
		<Nav.Link as='h5'>
			{ props.top.href === null ? props.top.title :
				<a href={props.top.href}>
					{props.top.title}
				</a>
			}
		</Nav.Link>
		{ props.other === null ? null : 
			props.other.map(link => (
				<Nav.Link
					href={ link.href }
					target={ link.target !== null ? link.target : '_parent' }
				>
					{ link.title }
				</Nav.Link>
			))
		}
	</Col>
);

const Footer = () => (
	<Container fluid>
		<footer>
			<Row>
				<LinkColumn 
					top={{ title: 'Membership' }}
					other={[
						{ title: 'Getting Involved', href: '/getting-involved' },
						{ title: 'Point System', href: '/point-system' },
					]}
				/>
				<LinkColumn 
					top={{ title: 'About' }}
					other={[
						{ title: 'Executive Board', href: '/executive-board'},
						{ title: 'Constitution', href: '/constitution'},
						{ title: 'National Website', href: 'http://nsbe.org/', target: '_blank'},
						{ title: 'Regional Website', href: 'http://www.nsbe.org/Regions/Region3/default.aspx', target: '_blank'},
					]}
				/>
				<LinkColumn top={{ title: 'Corporate', href: '/corporate' }} other={null} />
				<LinkColumn top={{ title: 'Contact', href: '/contact' }} other={null} />
				<Col sm={4} xs={12}>
					<Image src='../static/img/gator_chapter_logo_long.png' height='140' />
				</Col>
			</Row>
			<Row className='text-center my-3'>
				<Col>Designed by Q. Rivers and L. Rentz</Col>
			</Row>
		</footer>
	</Container>
);

export default Footer;
