import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const TopNavbar = () => {
	return (
		<nav className='top-nav'>
			<ul>
				<li>
					<FontAwesomeIcon icon={faEnvelope} />
					<a href='mailto:mpotulom28@gmail.com'>mpotulom28@gmail.com</a>
				</li>
				<li>
					<FontAwesomeIcon icon={faPhone} />
					<a href='tel:+27635902212'>+27 63 590 2212</a>
				</li>
				<li>
					<FontAwesomeIcon />
					<a href='https://linkedin.com/in/mmpotulo'>In/mmpotulo</a>
				</li>
			</ul>
		</nav>
	);
};

export default TopNavbar;
